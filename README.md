<p align="center">
  <img src="banner.svg" alt="Atlas — relevé de projets d'architecture" width="100%">
</p>

# Atlas — relevé de projets d'architecture

Carte interactive, façon Google Earth, pour localiser et cataloguer des projets d'architecture remarquables. Mono-fichier HTML/JS, sans installation, déployable tel quel sur GitHub Pages. Design noir/blanc/rouge minimaliste, suivant les principes Apple HIG.

## Fonctionnalités

- **Carte** — fond vectoriel OpenFreeMap (MapLibre GL), rendu net à tout niveau de zoom, regroupement des épingles selon le zoom
- **Épingles** — blanches par défaut, rouges une fois marquées « visité » (bascule rapide au survol ou depuis la fiche du projet), déplaçables par glisser-déposer
- **Ajout manuel** — clic sur la carte ou géocodage d'une adresse (Nominatim/OpenStreetMap)
- **Recherche** — par nom, architecte ou ville, navigable au clavier
- **Import automatique** :
  - **Wikidata** — par architecte, par lieu (rayon réglable), ou par année d'achèvement/ouverture
  - **RCE (Pays-Bas)** — registre officiel des rijksmonumenten, par ville
  - enrichissement photo automatique via les catégories **Wikimedia Commons** associées
  - lien de recherche rapide vers **Structurae** sur chaque fiche
- **Export / import JSON** — sauvegarde et restauration de toutes les données depuis le menu « ⋯ », pour ne rien perdre lors des mises à jour de l'app
- **Accessibilité** — focus clavier visible, cibles tactiles 44px, contraste AA, `aria-label` sur les contrôles, zones sûres iPhone, respect de `prefers-reduced-motion`
- **Stockage local** — `localStorage`, aucun serveur, aucun compte requis

## Déploiement

Ce dépôt contient un unique fichier `index.html` autonome.

**GitHub Pages** : Settings → Pages → Source = branche `main`, dossier `/ (root)`. L'app sera servie à `https://<utilisateur>.github.io/<repo>/`.

**En local** : ouvrir `index.html` directement dans un navigateur, aucune installation nécessaire.

## Limites connues

- Pas de récupération automatique des projets depuis worldarchitecture.org (pas d'API publique) — l'ajout d'image/lien depuis ce site se fait manuellement.
- Pas d'import automatique depuis Structurae (pas d'API gratuite) — lien de recherche rapide fourni à la place.
- L'import Wikidata/RCE dépend de la couverture et de la qualité des données saisies par ces sources.
- Les données sont stockées par navigateur/appareil — utiliser l'export/import JSON pour transférer ou sauvegarder.

## Stack

Leaflet.js · Leaflet.markercluster · MapLibre GL JS (OpenFreeMap) · Nominatim (géocodage) · Wikidata Query Service (SPARQL) · API RCE/rijksmonumenten.info · Wikimedia Commons API · aucune dépendance de build.

## Licence

MIT — voir [LICENSE](LICENSE).
