# Guide Pas a Pas - Mise a Jour des Outils

Ce guide explique comment mettre a jour le portail `mon-site-ia` :
- ajouter un nouvel outil,
- modifier un outil existant,
- supprimer un outil,
- publier la nouvelle version.

## 1. Structure des fichiers a connaitre

- `mon-site-ia/js/data.js` : liste de tous les outils (source principale).
- `mon-site-ia/assets/images/` : images des cartes outils.
- `mon-site-ia/js/script.js` : logique d'affichage (badge, bouton, description longue).
- `mon-site-ia/index.html` : versionning des assets (`?v=1.2`) et structure globale.

## 2. Ajouter un nouvel outil

1. Copier l'image de l'outil dans :
   - `mon-site-ia/assets/images/`
2. Ouvrir `mon-site-ia/js/data.js`.
3. Ajouter un nouvel objet dans le tableau `tools` (entre `{ ... }` et separe par une virgule).
4. Respecter ce modele minimum :

```js
{
  id: "mon-nouvel-outil",
  title: "MON NOUVEL OUTIL",
  subtitle: "(en ligne)",
  type: "App Web",
  image: "assets/images/mon_nouvel_outil.png",
  url: "https://mon-outil.exemple.com/",
  shortDescription: "Description courte affichee sur la carte.",
  longDescription: `Description longue (HTML autorise : <br>, <strong>, <ul>, etc.).`
}
```

5. Cas speciaux possibles :
   - Outil ChatGPT (affiche le message de connexion sur le bouton) :
     - ajouter `needsChatGPTLogin: true`
   - Outil non disponible (badge rouge "Under Construction") :
     - ajouter `isUnderConstruction: true`

6. Sauvegarder puis ouvrir `mon-site-ia/index.html` dans le navigateur pour verifier.

## 3. Modifier un outil existant

1. Ouvrir `mon-site-ia/js/data.js`.
2. Rechercher l'outil par son `id`.
3. Mettre a jour les champs necessaires (`title`, `url`, `shortDescription`, etc.).
4. Si vous changez l'image :
   - remplacer le fichier dans `assets/images/`,
   - ou changer le nom de fichier dans `image: "..."`
5. Tester dans le navigateur.

## 4. Supprimer un outil

1. Ouvrir `mon-site-ia/js/data.js`.
2. Supprimer l'objet complet de l'outil dans le tableau `tools`.
3. Verifier qu'il n'y a pas de virgule en trop apres suppression.
4. Optionnel : supprimer l'image correspondante dans `mon-site-ia/assets/images/`.

## 5. Publier la mise a jour (GitHub + Vercel)

1. Ouvrir un terminal dans le dossier racine (`Nos outils IA`).
2. Verifier les changements :

```powershell
git status
```

3. Ajouter les fichiers modifies :

```powershell
git add mon-site-ia/js/data.js mon-site-ia/assets/images mon-site-ia/index.html
```

4. Commit :

```powershell
git commit -m "Mise a jour portail IA: ajout/modification/suppression d'outils"
```

5. Push :

```powershell
git push
```

6. Vercel redeploie automatiquement si le repo est connecte.

## 6. Forcer le rafraichissement navigateur (cache)

Si les changements ne s'affichent pas :
- faire un rechargement force (`Ctrl + F5`),
- et/ou augmenter la version dans `index.html` :
  - `css/style.css?v=1.2` -> `?v=1.3`
  - `js/data.js?v=1.2` -> `?v=1.3`
  - `js/script.js?v=1.2` -> `?v=1.3`

## 7. Checklist rapide avant publication

- Le nouvel outil apparait bien sur la page.
- Le bouton ouvre la bonne URL.
- L'image est chargee correctement.
- La description longue est lisible.
- Le badge "Under Construction" est present uniquement si voulu.
- Aucun message d'erreur dans la console navigateur.

## 8. Probleme frequent a eviter

- **Encodage des accents** (`Ã©`, `Ã `, etc.) :
  - sauvegarder les fichiers en **UTF-8** (idealement UTF-8 sans BOM).
- **ID duplique** :
  - chaque `id` doit etre unique dans `tools`.

