# Changelog

## [Non publié]
### Corrigé
- Fond de carte : bascule de CARTO (accès anonyme fermé fin août 2026) vers Esri World Dark Gray Canvas, gratuit et sans clé.
- Persistance : remplacement de `window.storage` (API réservée à l'aperçu claude.ai) par `localStorage`, fonctionnel en fichier autonome.
- Passe UX/accessibilité (Apple HIG) : barre d'outils responsive (empilement < 700px, boutons icône-seule 44×44px), cibles tactiles conformes partout, focus clavier visible, navigation clavier des résultats de recherche, contraste de texte AA, `aria-label` sur les contrôles icône-seule, zones sûres iPhone (`env(safe-area-inset-*)`), respect de `prefers-reduced-motion`.
- Suppression de règles CSS dupliquées (`#wdBtn`, `.m-close`).

## 1.0.0 — commit initial
### Ajouté
- Carte Leaflet avec regroupement d'épingles, ajout manuel et déplacement par glisser-déposer.
- Recherche locale par nom, architecte, ville.
- Import Wikidata : par architecte, par lieu, par année.
- Sauvegarde locale des projets.
