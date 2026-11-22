# KAYSEUR ACADEMY

Première version de l'interface web de KAYSEUR ACADEMY.

## Règles d'accès prévues

- Les cours gratuits sont consultables sans compte.
- Un compte sera obligatoire pour utiliser KAYSEUR AI.
- Un compte sera obligatoire pour sauvegarder et synchroniser la progression.
- Les méthodes prévues pour l'authentification sont Google, e-mail, téléphone et GitHub. Elles ne sont pas encore connectées à un fournisseur d'identité.

## Fichiers

- `index.html` : structure de la page.
- `styles.css` : design responsive violet/noir.
- `app.js` : navigation et affichage des leçons gratuites.

## Tester

Ouvre `index.html` dans un navigateur récent. Pour publier le site, importe les fichiers à la racine du dépôt GitHub puis active GitHub Pages dans les paramètres du dépôt.

## Étapes restantes

1. Ajouter un catalogue de cours complet et les leçons.
2. Configurer l'authentification (par exemple Supabase) et les règles de sécurité.
3. Développer le backend de KAYSEUR AI sans exposer de clé API dans le navigateur.
4. Ajouter la sauvegarde de progression.
5. Préparer l'installation PWA puis les versions Android/iOS.

**Important :** cette première version est une interface de démonstration. Les boutons de compte affichent une information et ne créent pas encore de compte. KAYSEUR AI n'est pas encore connecté à un modèle.
