<p align="center">
  <img src="banner.svg" alt="Atlas — relevé de projets d'architecture" width="100%">
</p>

# Atlas — relevé de projets d'architecture

Carte interactive, façon Google Earth, pour localiser et cataloguer des projets d'architecture remarquables. Mono-fichier HTML/JS, sans installation, déployable tel quel sur GitHub Pages. Design noir/blanc/rouge minimaliste, suivant les principes Apple HIG.

## Fonctionnalités

**Carte**
- Fond vectoriel OpenFreeMap (MapLibre GL) recoloré pour la lisibilité : bâtiments, rues, eau et voies ferrées distincts ; noms des pays et capitales seuls aux zooms larges
- Épingles blanches, rouges une fois « visité », regroupées selon le zoom ; légende repliable
- Épingles figées par défaut ; déplacement via « Déplacer l'épingle » dans la fiche, avec Valider / Annuler
- « Autour de moi » : centrage sur la position de l'appareil

**Projets**
- Création rapide : clic sur la carte ou adresse géocodée, 5 champs essentiels (nom, architecte, année, adresse, photo)
- Fiche à onglets Infos / Photos / Plans / Commentaires / Collections, avec bannière photo et lien « Ouvrir » vers l'article
- « Compléter automatiquement » : base de référence locale, puis Wikidata, infobox Wikipédia et Wikimedia Commons ; adresse déduite de la position en dernier recours ; les champs déjà remplis ne sont jamais écrasés
- Bouton d'effacement dans les champs de saisie

**Trouver et organiser**
- Recherche par nom, architecte ou ville : la carte et la liste se filtrent en direct
- Panneau « Affichage » : couches, filtres (typologie, décennie, statut) et collections ; chaque filtre actif apparaît en pastille retirable
- Vue liste triable (nom, architecte, année, ville)
- Collections : un projet peut appartenir à plusieurs

**Importer**
- Depuis la base de référence ou Wikidata : par architecte, par lieu (rayon réglable) ou par année
- Sans doublon : un bâtiment déjà présent (même identifiant Wikidata, ou même nom à moins de 150 m) n'est jamais recréé
- Affectation directe de la sélection à une collection, existante ou nouvelle
- « Fusionner les doublons » : fusion des fiches en double sans perte d'information, et vérification des épingles superposées

**Partager**
- Publication d'un état figé (tout le relevé ou une collection) consultable par tous, notes et commentaires exclus par défaut
- Fiche éditoriale pour les visiteurs : grande photo et galerie, architecte et année, adresse avec itinéraire, plans, liens (Wikipédia, Wikidata, Structurae)
- Liens partageables `#projet=…` et `#q=…`, bouton Partager (feuille de partage native sur iPhone et iPad)

**Données**
- Stockage dans le navigateur (`localStorage`), sans compte
- Synchronisation facultative entre appareils via un dépôt GitHub privé
- Export / import JSON depuis le menu Données

**Qualité**
- Accessibilité : focus clavier visible, cibles tactiles de 44 px, contraste AA, `aria-label`, zones sûres iPhone, `prefers-reduced-motion`
- Délai maximal sur chaque appel réseau, avec état de chargement visible
- Identité : logo en tracés régulateurs (nombre d'or), une seule famille de polices (IBM Plex), jeu d'icônes dessinées

## Base de référence

Une base de bâtiments d'architecte (avec architecte, coordonnées et photo sur Wikidata) est reconstruite chaque semaine par GitHub Actions et publiée dans `data/reference.json`. L'app la charge au démarrage : recherche, import et complétion automatique fonctionnent alors instantanément, sans requête Wikidata en direct.

- Script : `data/build/build.mjs` (Node 20, sans dépendance)
- Workflow : `.github/workflows/build-reference.yml` — chaque lundi à 3 h UTC, ou à la demande
- Le fichier n'est recommitté que si les données ont changé
- Sans ce fichier (premier déploiement, ouverture en local), l'app fonctionne comme avant et interroge Wikidata en direct

**Premier lancement** : onglet *Actions* du dépôt → *Base de référence Wikidata* → *Run workflow*. Si l'étape de commit échoue avec une erreur de permission : *Settings → Actions → General → Workflow permissions → Read and write permissions*.

## Synchronisation entre appareils

Le relevé personnel (projets, collections) peut être synchronisé entre plusieurs appareils via un fichier JSON stocké dans un **dépôt GitHub privé**, distinct de ce dépôt public.

- Fusion projet par projet : la version la plus récente de chaque projet l'emporte ; deux appareils modifiant des projets différents ne s'écrasent pas
- Les suppressions sont mémorisées, pour qu'un autre appareil ne fasse pas réapparaître un projet supprimé
- Déclenchement : au démarrage, quelques secondes après chaque modification, au retour sur l'app, au retour du réseau, ou manuellement
- Hors connexion, tout reste enregistré sur l'appareil et part à la synchronisation suivante

**Mise en place (une fois)**
1. Créer un dépôt **privé** sur GitHub, par exemple `archibase-data`
2. Créer un jeton *fine-grained* (Settings → Developer settings → Personal access tokens → Fine-grained tokens) limité à ce dépôt, avec la permission *Contents : Read and write*
3. Sur chaque appareil : menu ⇅ → Synchronisation → saisir le dépôt et le jeton

Le jeton est conservé uniquement sur l'appareil ; ne pas le saisir sur un appareil partagé.

## Publication

Le relevé privé reste la version de travail. Depuis le panneau *Synchronisation* (menu ⇅), le bouton **Publier sur Archibase** fige son état et l'écrit dans `data/published.json` de ce dépôt public.

- Choix du contenu : tout le relevé, ou une seule collection
- Notes et commentaires exclus par défaut (case à cocher pour les inclure) ; collections et données internes jamais publiées
- Les visiteurs voient la sélection publiée à la place des exemples, en lecture seule ; recherche et filtres s'y appliquent
- Le propriétaire continue de voir et modifier son relevé complet, sans doublon
- Le jeton de synchronisation doit aussi avoir accès à ce dépôt public (*Contents : Read and write*)

## Déploiement

Ce dépôt contient un unique fichier `index.html` autonome.

**GitHub Pages** : Settings → Pages → Source = branche `main`, dossier `/ (root)`. L'app sera servie à `https://<utilisateur>.github.io/<repo>/`.

**En local** : ouvrir `index.html` directement dans un navigateur, aucune installation nécessaire.

## Limites connues

- Pas de récupération automatique des projets depuis worldarchitecture.org (pas d'API publique) — l'ajout d'image/lien depuis ce site se fait manuellement.
- Pas d'import automatique depuis Structurae (pas d'API gratuite) — lien de recherche rapide fourni à la place.
- L'import et la recherche automatique dépendent de la couverture et de la qualité des données Wikidata.
- Sans synchronisation configurée, les données restent propres à chaque navigateur ; l'export/import JSON permet alors de les transférer.

## Stack

Leaflet.js · Leaflet.markercluster · MapLibre GL JS (OpenFreeMap) · Nominatim (géocodage) · Wikidata Query Service (SPARQL) · aucune dépendance de build.

## Licence

MIT — voir [LICENSE](LICENSE).
