# Changelog

## 1.4.0
### Corrigé
- Fond de carte : `maxZoom` manquant sur l'instance Leaflet, requis par le binding MapLibre GL Leaflet — cause racine des plantages de carte observés depuis plusieurs versions.
- Barre d'outils : seuil du mode compact remonté de 700px à 900px pour couvrir l'iPad en portrait (~768-834px), qui restait en mode « bureau » trop à l'étroit.
- Largeur du menu de résultats de recherche contrainte à l'écran disponible.

### Retiré
- Import RCE (Pays-Bas) et enrichissement photo Wikimedia Commons — sources de blocages silencieux ; retour à un import Wikidata seul, plus simple et fiable.

### Changé
- Délai maximal ajouté sur tous les appels réseau restants (recherche Wikidata, géocodage, recherche automatique), avec état de chargement visible sur chaque bouton concerné — plus aucune recherche ne peut rester bloquée sans retour visuel.

## 1.3.0
### Ajouté
- Champs essentiels dès la création : nom, architecte, année, adresse, photo d'illustration.
- Enrichissement structuré : photos multiples, plans/documents, commentaires horodatés (journal cumulatif).
- Recherche automatique (« Compléter automatiquement ») : préremplissage des champs vides depuis Wikidata, sans écraser les données déjà saisies.
- Fiche à onglets (Infos / Photos / Plans / Commentaires) accessible en un seul clic sur l'épingle.

### Changé
- Suppression de l'aperçu au survol des épingles, qui exigeait un double tap sur mobile pour atteindre la fiche complète — un clic ou tap suffit désormais.

## 1.2.0
### Ajouté
- Menu « ⋯ » avec export et import des données au format JSON (sauvegarde avant mise à jour de l'app).
- Statut « visité » par épingle : bascule rapide, case dans la fiche d'édition, couleur dédiée sur la carte.
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
