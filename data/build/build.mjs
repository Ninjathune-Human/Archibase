// Construit data/reference.json : bâtiments Wikidata ayant un architecte (P84),
// des coordonnées (P625) et une photo (P18).
// Exécuté chaque semaine par .github/workflows/build-reference.yml (Node 20+, fetch natif).
//
// Deux étapes, pour rester sous la limite de 60 s par requête de Wikidata :
//   1. liste des identifiants (requête légère, sans libellés) ;
//   2. détails par lots de BATCH identifiants (libellé, architectes, année, coordonnées, photo).

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = 'https://query.wikidata.org/sparql';
// La politique Wikimedia exige un User-Agent identifiant le projet.
const USER_AGENT = 'Atlas-Archibase/1.0 (https://github.com/Ninjathune-Human/Archibase)';
const BATCH = 200;
const PAUSE_MS = 1000;
const MAX_RETRIES = 5;

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'reference.json');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function sparql(query) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/sparql-results+json',
        'User-Agent': USER_AGENT,
      },
      body: 'query=' + encodeURIComponent(query),
    });
    if (res.ok) return (await res.json()).results.bindings;
    const wait = res.status === 429
      ? (Number(res.headers.get('retry-after')) || 30) * 1000
      : attempt * 5000;
    console.warn(`HTTP ${res.status}, nouvel essai ${attempt}/${MAX_RETRIES} dans ${wait / 1000}s`);
    await sleep(wait);
  }
  throw new Error('Wikidata ne répond pas après plusieurs essais');
}

function parsePoint(wkt) {
  const m = /Point\(([-\d.eE]+)\s+([-\d.eE]+)\)/.exec(wkt || '');
  return m ? [Number(m[2]), Number(m[1])] : null; // [lat, lng]
}

const round = (n) => Math.round(n * 1e5) / 1e5;

async function listIds() {
  const rows = await sparql(`
    SELECT DISTINCT ?item WHERE {
      ?item wdt:P84 [] ; wdt:P625 [] ; wdt:P18 [] .
    }`);
  return rows.map((r) => r.item.value.split('/').pop());
}

async function details(ids) {
  const values = ids.map((q) => 'wd:' + q).join(' ');
  return sparql(`
    SELECT ?item ?itemLabel
           (SAMPLE(?coord) AS ?c) (SAMPLE(?img) AS ?i) (MIN(YEAR(?d)) AS ?y)
           (GROUP_CONCAT(DISTINCT ?archLabel; separator="|") AS ?a)
    WHERE {
      VALUES ?item { ${values} }
      ?item wdt:P625 ?coord ; wdt:P18 ?img ; wdt:P84 ?arch .
      OPTIONAL { ?item wdt:P571|wdt:P1619 ?d . }
      SERVICE wikibase:label {
        bd:serviceParam wikibase:language "fr,en,mul" .
        ?item rdfs:label ?itemLabel .
        ?arch rdfs:label ?archLabel .
      }
    }
    GROUP BY ?item ?itemLabel`);
}

async function main() {
  console.log('Étape 1 : liste des identifiants…');
  const ids = [...new Set(await listIds())];
  console.log(`${ids.length} bâtiments trouvés`);

  const rows = [];
  for (let i = 0; i < ids.length; i += BATCH) {
    const chunk = ids.slice(i, i + BATCH);
    const res = await details(chunk);
    for (const r of res) {
      const pt = parsePoint(r.c && r.c.value);
      if (!pt) continue;
      const qid = Number(r.item.value.split('/').pop().slice(1));
      const title = r.itemLabel ? r.itemLabel.value : '';
      // Un libellé égal au QID signifie « pas de libellé » : inutile à afficher.
      if (!title || /^Q\d+$/.test(title)) continue;
      const file = r.i ? decodeURIComponent(r.i.value.split('/Special:FilePath/').pop()) : '';
      const year = r.y ? Number(r.y.value) : 0;
      const architects = r.a ? r.a.value.split('|').filter((s) => !/^Q\d+$/.test(s)).join(', ') : '';
      rows.push([qid, title, architects, year, round(pt[0]), round(pt[1]), file]);
    }
    console.log(`Détails : ${Math.min(i + BATCH, ids.length)}/${ids.length}`);
    await sleep(PAUSE_MS);
  }

  rows.sort((a, b) => a[0] - b[0]); // ordre stable : pas de faux changements d'un build à l'autre

  // Si les bâtiments sont identiques au build précédent, on ne touche pas au fichier :
  // sinon la seule date de construction provoquerait un commit chaque semaine.
  try {
    const previous = JSON.parse(await readFile(OUT, 'utf8'));
    if (JSON.stringify(previous.rows) === JSON.stringify(rows)) {
      console.log('Aucun changement dans les données : fichier conservé tel quel.');
      return;
    }
  } catch { /* premier build : pas de fichier précédent */ }

  const payload = {
    v: 1,
    builtAt: new Date().toISOString().slice(0, 10),
    count: rows.length,
    fields: ['qid', 'title', 'architect', 'year', 'lat', 'lng', 'image'],
    rows,
  };
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(payload));
  console.log(`Écrit : ${OUT} (${rows.length} bâtiments)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
