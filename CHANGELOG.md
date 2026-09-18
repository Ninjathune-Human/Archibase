# Changelog

## 1.2.0
### Ajouté
- Menu « ⋯ » avec export et import des données au format JSON (sauvegarde avant mise à jour de l'app).
- Statut « visité » par épingle : bascule rapide au survol, case dans la fiche d'édition, couleur dédiée sur la carte.
- Bannière du dépôt refondue avec des références au dessin d'architecture (élévation stylisée, ligne de cote, épingle).

### Changé
- Refonte complète de la palette : noir / blanc / rouge (accent unique), suivant les principes Apple HIG — remplace la palette bleu de plan initiale.
- Passe de design : rayons concentriques, boutons capsule, matériau verre sur la barre d'outils, ombres douces.

## 1.1.0
### Ajouté
- Import automatique depuis Wikidata : par architecte, par lieu (rayon réglable), par année d'achèvement/ouverture.
- Import automatique depuis le registre RCE (Pays-Bas / rijksmonumenten).
- Enrichissement photo automatique via les catégories Wikimedia Commons.
- Lien de recherche rapide vers Structurae sur chaque fiche.

### Corrigé
- Fond de carte : CARTO → Esri → OpenFreeMap (vectoriel, MapLibre GL), suite à la fermeture de l'accès anonyme de CARTO.
- Persistance : `window.storage` (réservé à l'aperçu claude.ai) → `localStorage`, fonctionnel en fichier autonome.
- Passe UX/accessibilité (Apple HIG) : barre d'outils responsive, cibles tactiles 44px, focus clavier visible, navigation clavier des résultats, contraste AA, zones sûres iPhone, `prefers-reduced-motion`.

## 1.0.0 — commit initial
### Ajouté
- Carte Leaflet avec regroupement d'épingles, ajout manuel et déplacement par glisser-déposer.
- Recherche locale par nom, architecte, ville.
- Sauvegarde locale des projets.
