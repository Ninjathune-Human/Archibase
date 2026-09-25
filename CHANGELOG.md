# Changelog

## 1.12.0
### Changé
- Volet unique partageant l'écran avec la carte (à droite ; en bas sur iPhone), ancré par défaut, largeur réglable, ouvert par un seul bouton : onglets Projets (filtres, collections, base de référence et liste réunis), Import et Données. Remplace les panneaux gauche et droite, les fenêtres Import et Synchronisation, et le menu déroulant Données.
- Filtres : statut en tête, date de réalisation repliable avec résumé.
- Carte : plus de polygone au survol des groupes ; animations de regroupement rétablies (la règle de mouvement réduit ne vise plus que les effets décoratifs).
- Carte : routes masquées aux petites échelles (autoroutes à l'échelle régionale, rues à l'échelle de la ville), limites maritimes retirées, limites régionales à partir de l'échelle d'un pays ; Groenland et Antarctique dans la même teinte que les autres terres.

## 1.11.0
### Ajouté
- Fiche éditoriale pour la consultation des projets publiés : grande photo et galerie, titre, architecte et année, adresse avec itinéraire, notes, plans, commentaires publiés et liens (article, Wikidata, Structurae). Remplace le formulaire en lecture seule.
- Panneau latéral « Affichage » réunissant couches, filtres et collections (feuille par le bas sur iPhone), à la place d'un menu et de deux fenêtres.
- Pastilles des filtres actifs sous la barre de recherche, retirables une à une ou toutes ensemble.
- Liens partageables : `#projet=…` ouvre directement une fiche, `#q=…` une recherche ; bouton Partager dans la fiche (feuille de partage native sur iPhone et iPad).
- Vue liste des projets, triable (nom, architecte, année, ville), liée à la recherche et aux filtres, paginée par 200.
- « Autour de moi » : centrage sur la position de l'appareil, avec cercle de précision.
- Légende repliable de la carte ; bouton d'effacement dans les champs de saisie ; jeu d'icônes dessinées.

### Changé
- Nouveau logo (tracés régulateurs au nombre d'or) et signature en capitales espacées.
- Fond de carte recoloré : bâtiments, rues, eau et voies ferrées nettement plus lisibles.
- Une seule famille de polices (IBM Plex) ; mention de chargement de la base de référence.
- Épingles figées par défaut, déplacement via la fiche avec validation.
- Import sans doublon (identifiant Wikidata ou nom à moins de 150 m) ; fusion des doublons et vérification des épingles superposées.

## 1.10.0
### Ajouté
- Publication : bouton « Publier sur Archibase » qui fige l'état du relevé (tout, ou une collection) dans `data/published.json` du dépôt public ; notes et commentaires exclus par défaut.
- Les visiteurs consultent la sélection publiée à la place des exemples de démonstration, en fiches en lecture seule ; recherche et filtres s'y appliquent.
- Panneau de synchronisation reconnu par les gestionnaires de mots de passe (dépôt = identifiant, jeton = mot de passe).

### Changé
- Exemples de saisie distincts des valeurs réelles dans le panneau de synchronisation, messages d'erreur plus explicites.

## 1.9.0
### Ajouté
- Synchronisation multi-appareils du relevé personnel via un dépôt GitHub privé (menu ⇅ → Synchronisation) : fusion projet par projet sur la date de modification, suppressions mémorisées, gestion des conflits d'écriture, fonctionnement hors ligne avec envoi au retour du réseau.
- Pastille d'alerte sur le bouton ⇅ en cas d'échec de synchronisation ; avertissement si le dépôt choisi est public.

### Changé
- Les exemples de démonstration ne sont jamais synchronisés et disparaissent dès que de vrais projets existent ; un exemple modifié par l'utilisateur devient un projet à part entière.
- Workflow de la base de référence : limite de temps portée à 330 min (92 000 bâtiments).

## 1.8.0
### Ajouté
- Base de référence préconstruite : bâtiments Wikidata avec architecte, coordonnées et photo, reconstruits chaque semaine par GitHub Actions (`data/build/build.mjs`, `.github/workflows/build-reference.yml`) et publiés dans `data/reference.json`.
- Couche « Base de référence » sur la carte, grise et sous les épingles personnelles, activable depuis le menu Filtres ; état mémorisé.
- Un point de référence s'ouvre en fiche préremplie (titre, architecte, année, photo, adresse) avec un bouton « Ajouter à mon relevé » ; l'identifiant Wikidata est conservé.

### Changé
- Import par architecte, par lieu et par année : recherche dans la base locale, instantanée ; Wikidata en direct seulement si la base est absente.
- « Compléter automatiquement » utilise d'abord l'identifiant Wikidata exact quand il est connu, puis la base locale, avant toute recherche en ligne.
- La recherche de la barre filtre aussi la couche de référence.

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
