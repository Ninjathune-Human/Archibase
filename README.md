<p align="center">
  <img src="banner.svg" alt="Atlas — relevé de projets d'architecture" width="100%">
</p>

# Atlas — relevé de projets d'architecture

Carte interactive, façon Google Earth, pour localiser et cataloguer des projets d'architecture remarquables. Mono-fichier HTML/JS, sans installation, déployable tel quel sur GitHub Pages.

## Fonctionnalités

- Carte sombre (fond Esri Dark Gray Canvas, sans clé requise) avec regroupement des épingles selon le zoom
- Barre d'outils responsive : icônes seules et cibles tactiles 44×44px sous 700px de large, zones sûres iPhone (encoche, barre d'accueil)
- Ajout manuel d'un projet : clic sur la carte ou géocodage d'une adresse (Nominatim/OpenStreetMap)
- Épingle déplaçable par glisser-déposer, fiche d'aperçu (image, architecte, lien) au survol
- Recherche par nom, architecte ou ville, navigable au clavier
- Import automatique depuis **Wikidata** : par architecte, par lieu (rayon réglable), ou par année d'achèvement/ouverture
- Accessibilité : focus visible, `aria-label` sur les contrôles, contraste AA, `prefers-reduced-motion` respecté
- Données sauvegardées localement dans le navigateur (`localStorage`) — aucun serveur, aucun compte

## Déploiement

Ce dépôt contient un unique fichier `index.html` autonome.

**GitHub Pages** : Settings → Pages → Source = branche `main`, dossier `/root`. L'app sera servie à `https://<utilisateur>.github.io/<repo>/`.

**En local** : ouvrir `index.html` directement dans un navigateur, aucune installation nécessaire.

## Limites connues

- Pas de récupération automatique des projets depuis worldarchitecture.org (CORS) — l'ajout d'image/lien depuis ce site se fait manuellement.
- L'import Wikidata dépend de la couverture et de la qualité des données saisies par la communauté Wikidata.
- Les données sont stockées par navigateur/appareil ; pas de synchronisation entre appareils.

## Stack

Leaflet.js · Leaflet.markercluster · Nominatim (géocodage) · Wikidata Query Service (SPARQL) · aucune dépendance de build.

## Licence

MIT — voir [LICENSE](LICENSE).
