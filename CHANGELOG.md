# Changelog

## 1.7.0
### Ajouté
- Identité visuelle : symbole « fragment de plan » (trame, mur d'angle en coupe, refend, repère rouge), à angles francs — dans l'app, en favicon et sur la bannière du dépôt.
- Le bouton « ⋯ » est scindé en deux : un bouton Filtres/Collections (porteur de l'indicateur de filtre actif) et un bouton Import/Export.
- La recherche filtre désormais la carte en direct : seules les réalisations correspondantes restent affichées.

### Corrigé
- Contrôles de zoom Leaflet déplacés en bas à gauche : ils apparaissaient en transparence derrière le bloc de marque en haut à gauche.
- Menu de résultats de recherche ancré à la barre de recherche au lieu d'un décalage fixe — il recouvrait le champ sur iPad en portrait.
- Hiérarchie des boutons de la barre d'outils : import en aplat rouge, ajout en contour rouge sur fond noir.

## 1.6.0
### Ajouté
- Bannière photo en haut de la fiche projet, mise à jour en direct (URL tapée à la main, résultat de la recherche automatique) avec repli propre si l'image ne charge pas.
- « Compléter automatiquement » cherche désormais une photo dans trois sources en cascade : Wikidata (P18), champ image de l'infobox Wikipédia, puis catégorie Wikimedia Commons associée en dernier recours.

## 1.5.1
### Ajouté
- « Compléter automatiquement » croise désormais Wikidata puis l'infobox de l'article Wikipédia associé (architecte, année, adresse) avant de recourir au géocodage inversé — Wikidata seule est souvent incomplète sur la date d'achèvement et l'adresse.
- Message de statut détaillé : indique la source de chaque champ complété et liste explicitement ce qui reste introuvable après recherche.

## 1.5.0
### Ajouté
- Collections : regroupement de projets en ensembles nommés, affichables/masquables sur la carte, appartenance multiple par projet.
- Filtres par typologie, décennie et statut visité, cumulables avec les collections ; indicateur visuel quand un filtre est actif.
- Champ Typologie sur chaque projet, avec suggestion automatique (via Wikidata P31) dans « Compléter automatiquement ».
- Géocodage inversé : l'adresse se déduit automatiquement des coordonnées à la création par clic carte, et via la recherche automatique.
- Export/import JSON étendu aux collections.

### Corrigé
- Le champ Notes n'est plus rempli automatiquement d'un texte de provenance à l'import Wikidata en masse.

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
