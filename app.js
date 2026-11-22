
"use strict";

// ============================================
// KAYSEUR ACADEMY — GESTION DES FORMATIONS
// ============================================

const courses = {
  web: {
    title: "Développement Web",
    modules: [
      {
        title: "Module 1 — Découvrir le Web",
        lessons: [
          {
            title: "Comprendre le développement Web",
            content: `
              <h3>1. Qu'est-ce que le développement Web ?</h3>
              <p>Le développement Web consiste à concevoir, construire et améliorer des sites et des applications accessibles depuis un navigateur. C'est une discipline qui mélange la logique, la créativité, la résolution de problèmes et la compréhension des besoins des utilisateurs.</p>
              <p>Un site Web peut être une page personnelle, une boutique en ligne, une plateforme éducative ou un réseau social. Chaque projet possède un objectif et une organisation particulière.</p>

              <h3>2. Comment fonctionne un site Web ?</h3>
              <p>Lorsque tu visites une adresse Web, ton navigateur demande les ressources nécessaires à un serveur. Le serveur répond en envoyant des fichiers que le navigateur interprète pour afficher la page.</p>
              <ul>
                <li><strong>Le navigateur :</strong> affiche le site et permet de l'utiliser.</li>
                <li><strong>Le serveur :</strong> reçoit les demandes et fournit les ressources.</li>
                <li><strong>Le client :</strong> désigne généralement l'application qui effectue la demande.</li>
                <li><strong>Le réseau :</strong> permet aux différents appareils de communiquer.</li>
              </ul>

              <h3>3. Les trois technologies principales</h3>
              <p>HTML organise le contenu, CSS définit son apparence et JavaScript ajoute des comportements interactifs.</p>
              <p>Ces trois technologies travaillent ensemble, mais elles ont chacune un rôle différent. Il est important de comprendre cette différence avant de commencer à créer des projets.</p>

              <h3>4. Exemple concret</h3>
              <p>Imagine une carte de formation sur une plateforme :</p>
              <ul>
                <li>HTML crée le titre, le texte et le bouton.</li>
                <li>CSS donne une couleur, une taille et une disposition à la carte.</li>
                <li>JavaScript permet au bouton d'ouvrir la formation.</li>
              </ul>

              <h3>À retenir</h3>
              <p>Le développement Web ne consiste pas uniquement à écrire du code. Il consiste à transformer une idée en une expérience numérique utile et compréhensible.</p>

              <h3>Exercice pratique</h3>
              <p>Imagine un site éducatif destiné aux débutants. Écris trois fonctionnalités que tu aimerais proposer aux visiteurs et explique pourquoi chacune serait utile.</p>
            `
          },
          {
            title: "Installer et organiser son environnement",
            content: `
              <h3>1. Pourquoi organiser son travail ?</h3>
              <p>Un projet Web contient souvent plusieurs fichiers. Une bonne organisation permet de retrouver rapidement le code, de corriger les erreurs et de faire évoluer le projet.</p>

              <h3>2. Les outils de départ</h3>
              <ul>
                <li>Un éditeur de code pour écrire les fichiers.</li>
                <li>Un navigateur pour tester le résultat.</li>
                <li>Un gestionnaire de fichiers pour organiser le projet.</li>
                <li>Git pour suivre les changements et conserver l'historique.</li>
              </ul>

              <h3>3. Structure d'un petit projet</h3>
              <pre><code>mon-site/
├── index.html
├── style.css
└── app.js</code></pre>
              <p><strong>index.html</strong> contient la structure de la page. <strong>style.css</strong> gère son apparence. <strong>app.js</strong> gère les interactions.</p>

              <h3>4. Les bonnes habitudes</h3>
              <p>Choisis des noms simples, évite de mélanger tous les fichiers dans un seul document et fais régulièrement des sauvegardes. Teste chaque changement avant de passer à la suite.</p>

              <h3>Exercice pratique</h3>
              <p>Crée un dossier appelé mon-premier-site et prépare les trois fichiers présentés dans cette leçon. Vérifie que tu sais expliquer le rôle de chacun.</p>
            `
          },
          {
            title: "Créer sa première page HTML",
            content: `
              <h3>1. Comprendre HTML</h3>
              <p>HTML signifie HyperText Markup Language. Il sert à structurer le contenu d'une page : titres, paragraphes, images, liens, listes et formulaires.</p>
              <p>HTML n'est pas un langage de programmation classique. C'est un langage de balisage qui décrit la structure du document.</p>

              <h3>2. Une structure de base</h3>
              <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport"
    content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Mon premier site&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Bienvenue&lt;/h1&gt;
  &lt;p&gt;Je découvre HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

              <h3>3. Les balises importantes</h3>
              <ul>
                <li><code>&lt;h1&gt;</code> : titre principal.</li>
                <li><code>&lt;p&gt;</code> : paragraphe.</li>
                <li><code>&lt;a&gt;</code> : lien.</li>
                <li><code>&lt;img&gt;</code> : image.</li>
                <li><code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> : liste.</li>
                <li><code>&lt;button&gt;</code> : bouton.</li>
              </ul>

              <h3>4. Comprendre les attributs</h3>
              <p>Un attribut ajoute une information à une balise. Par exemple, l'attribut href indique la destination d'un lien et l'attribut alt décrit une image.</p>

              <h3>Exercice pratique</h3>
              <p>Crée une page avec un titre, deux paragraphes, une liste de trois éléments et un lien. Ouvre ensuite le fichier dans ton navigateur.</p>
            `
          }
        ]
      },
      {
        title: "Module 2 — Donner du style avec CSS",
        lessons: [
          {
            title: "Découvrir CSS",
            content: `
              <h3>1. Le rôle de CSS</h3>
              <p>CSS signifie Cascading Style Sheets. Cette technologie permet de contrôler l'apparence d'une page Web : couleurs, polices, espacements, bordures, tailles et dispositions.</p>
              <p>Une page HTML peut fonctionner sans CSS, mais elle sera généralement moins personnalisée visuellement.</p>

              <h3>2. La syntaxe CSS</h3>
              <pre><code>h1 {
  color: purple;
  font-size: 32px;
}</code></pre>
              <p>Le sélecteur indique quel élément modifier. Les propriétés indiquent ce qui doit changer et les valeurs précisent le résultat.</p>

              <h3>3. Relier CSS à HTML</h3>
              <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
              <p>Cette ligne se place dans la partie head du document HTML.</p>

              <h3>4. Les propriétés de base</h3>
              <ul>
                <li><code>color</code> : couleur du texte.</li>
                <li><code>background</code> : arrière-plan.</li>
                <li><code>font-size</code> : taille du texte.</li>
                <li><code>margin</code> : espace extérieur.</li>
                <li><code>padding</code> : espace intérieur.</li>
                <li><code>border</code> : bordure.</li>
              </ul>

              <h3>Exercice pratique</h3>
              <p>Personnalise ta première page avec une couleur de fond, une couleur de titre et des espacements adaptés.</p>
            `
          },
          {
            title: "Créer une mise en page moderne",
            content: `
              <h3>1. Organiser les éléments</h3>
              <p>Une bonne mise en page permet aux visiteurs de comprendre rapidement où se trouvent les informations. Les espaces, les alignements et la hiérarchie visuelle jouent un rôle essentiel.</p>

              <h3>2. Flexbox</h3>
              <p>Flexbox aide à aligner des éléments sur une ligne ou une colonne.</p>
              <pre><code>.conteneur {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}</code></pre>

              <h3>3. CSS Grid</h3>
              <p>Grid permet de construire des dispositions en lignes et en colonnes. Il est particulièrement utile pour les tableaux de bord et les galeries de cartes.</p>
              <pre><code>.grille {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);
  gap: 20px;
}</code></pre>

              <h3>4. Adapter le site aux écrans</h3>
              <p>Une interface responsive s'adapte aux téléphones, tablettes et ordinateurs. Les media queries permettent d'appliquer des règles différentes selon la largeur disponible.</p>

              <h3>Exercice pratique</h3>
              <p>Construis trois cartes de formation alignées sur ordinateur et empilées sur téléphone.</p>
            `
          },
          {
            title: "Créer une interface responsive",
            content: `
              <h3>1. Pourquoi le responsive est important</h3>
              <p>Les visiteurs utilisent différents appareils. Une interface qui fonctionne uniquement sur un grand écran peut devenir difficile à utiliser sur un téléphone.</p>

              <h3>2. La balise viewport</h3>
              <pre><code>&lt;meta name="viewport"
content="width=device-width, initial-scale=1.0"&gt;</code></pre>

              <h3>3. Les media queries</h3>
              <pre><code>@media (max-width: 600px) {
  .menu {
    flex-direction: column;
  }
}</code></pre>

              <h3>4. Vérifier son interface</h3>
              <p>Teste les textes, les boutons, les images et les menus sur plusieurs tailles d'écran. Évite les éléments trop petits et les contenus qui débordent.</p>

              <h3>Exercice pratique</h3>
              <p>Adapte ton site pour qu'il soit lisible sur un écran de téléphone et sur un écran d'ordinateur.</p>
            `
          }
        ]
      }
    ]
  },

  programming: {
    title: "Programmation",
    modules: [
      {
        title: "Module 1 — Les bases de la logique",
        lessons: [
          {
            title: "Comprendre la programmation",
            content: `
              <h3>1. Qu'est-ce que programmer ?</h3>
              <p>Programmer consiste à donner à un ordinateur des instructions précises afin qu'il réalise une tâche. Ces instructions doivent être organisées dans un ordre logique.</p>

              <h3>2. Un programme suit une logique</h3>
              <p>Un programme reçoit parfois des données, les traite et produit un résultat. Par exemple, une calculatrice reçoit deux nombres et une opération, effectue le calcul puis affiche le résultat.</p>

              <h3>3. Les étapes de résolution d'un problème</h3>
              <ol>
                <li>Comprendre le problème.</li>
                <li>Identifier les informations nécessaires.</li>
                <li>Décomposer le travail en petites étapes.</li>
                <li>Écrire une solution.</li>
                <li>Tester et corriger les erreurs.</li>
              </ol>

              <h3>Exercice pratique</h3>
              <p>Décris les étapes qu'un programme devrait suivre pour calculer la moyenne de trois notes.</p>
            `
          },
          {
            title: "Variables et types de données",
            content: `
              <h3>1. Une variable, c'est quoi ?</h3>
              <p>Une variable est un espace nommé utilisé par un programme pour conserver une valeur. Cette valeur peut représenter un âge, un nom, un prix ou un résultat.</p>

              <h3>2. Exemple en JavaScript</h3>
              <pre><code>let nom = "Kayseur";
let age = 16;
let actif = true;

console.log(nom);
console.log(age);
console.log(actif);</code></pre>

              <h3>3. Les types de données courants</h3>
              <ul>
                <li>String : texte.</li>
                <li>Number : nombre.</li>
                <li>Boolean : vrai ou faux.</li>
                <li>Array : collection de valeurs.</li>
                <li>Object : ensemble de propriétés.</li>
              </ul>

              <h3>4. Choisir de bons noms</h3>
              <p>Un nom de variable doit expliquer son rôle. Par exemple, totalPrix est plus compréhensible que x lorsqu'on calcule un prix.</p>

              <h3>Exercice pratique</h3>
              <p>Déclare trois variables : un nom de projet, un nombre de leçons et un état de validation.</p>
            `
          },
          {
            title: "Conditions et décisions",
            content: `
              <h3>1. Pourquoi utiliser une condition ?</h3>
              <p>Un programme doit souvent choisir entre plusieurs actions. Une condition lui permet de vérifier si une situation est vraie ou fausse.</p>

              <h3>2. Exemple</h3>
              <pre><code>let note = 15;

if (note >= 10) {
  console.log("Résultat validé");
} else {
  console.log("Résultat à améliorer");
}</code></pre>

              <h3>3. Les opérateurs</h3>
              <ul>
                <li><code>===</code> : égalité stricte.</li>
                <li><code>!==</code> : différence stricte.</li>
                <li><code>&gt;</code> : supérieur.</li>
                <li><code>&lt;</code> : inférieur.</li>
                <li><code>&amp;&amp;</code> : et logique.</li>
                <li><code>||</code> : ou logique.</li>
              </ul>

              <h3>Exercice pratique</h3>
              <p>Imagine un système qui affiche un message différent selon qu'un utilisateur a terminé ou non une leçon.</p>
            `
          }
        ]
      },
      {
        title: "Module 2 — Construire des programmes",
        lessons: [
          {
            title: "Boucles et répétitions",
            content: `
              <h3>1. Pourquoi les boucles existent-elles ?</h3>
              <p>Une boucle permet de répéter une instruction plusieurs fois sans devoir réécrire le même code.</p>

              <h3>2. La boucle for</h3>
              <pre><code>for (let i = 1; i <= 5; i++) {
  console.log("Leçon " + i);
}</code></pre>

              <h3>3. La boucle while</h3>
              <pre><code>let compteur = 1;

while (compteur <= 3) {
  console.log(compteur);
  compteur++;
}</code></pre>

              <h3>4. Attention aux boucles infinies</h3>
              <p>Une condition qui ne devient jamais fausse peut empêcher un programme de terminer une boucle. Il faut donc vérifier la progression du compteur.</p>

              <h3>Exercice pratique</h3>
              <p>Écris un programme qui affiche les nombres de 1 à 10.</p>
            `
          },
          {
            title: "Fonctions et réutilisation",
            content: `
              <h3>1. Le rôle d'une fonction</h3>
              <p>Une fonction regroupe des instructions qui réalisent une tâche précise. Elle évite de répéter le même code à plusieurs endroits.</p>

              <h3>2. Exemple</h3>
              <pre><code>function addition(a, b) {
  return a + b;
}

const resultat = addition(5, 3);
console.log(resultat);</code></pre>

              <h3>3. Paramètres et retour</h3>
              <p>Les paramètres sont les informations transmises à la fonction. Le mot return permet de renvoyer un résultat au programme qui l'appelle.</p>

              <h3>4. Bonnes pratiques</h3>
              <p>Une fonction doit idéalement réaliser une tâche claire. Donne-lui un nom compréhensible et évite de lui confier trop de responsabilités.</p>

              <h3>Exercice pratique</h3>
              <p>Crée une fonction qui reçoit un prix et une quantité, puis renvoie le montant total.</p>
            `
          },
          {
            title: "Déboguer et tester son code",
            content: `
              <h3>1. Comprendre les erreurs</h3>
              <p>Une erreur peut provenir d'une faute de syntaxe, d'une mauvaise logique ou d'une donnée inattendue. Apprendre à lire les messages d'erreur est une compétence essentielle.</p>

              <h3>2. Utiliser console.log</h3>
              <p>Cette instruction permet d'afficher des valeurs pour comprendre ce qui se passe pendant l'exécution du programme.</p>
              <pre><code>let prix = 20;
let quantite = 3;

console.log("Prix :", prix);
console.log("Quantité :", quantite);
console.log("Total :", prix * quantite);</code></pre>

              <h3>3. Tester plusieurs situations</h3>
              <p>Ne teste pas seulement le cas normal. Essaie aussi les valeurs nulles, les textes inattendus et les limites de ton programme.</p>

              <h3>Exercice pratique</h3>
              <p>Écris une petite fonction de calcul et vérifie son résultat avec plusieurs valeurs différentes.</p>
            `
          }
        ]
      }
    ]
  },

  ai: {
    title: "Intelligence artificielle",
    modules: [
      {
        title: "Module 1 — Découvrir l'IA",
        lessons: [
          {
            title: "Qu'est-ce que l'intelligence artificielle ?",
            content: `
              <h3>1. Définition</h3>
              <p>L'intelligence artificielle regroupe des méthodes informatiques permettant à des systèmes d'effectuer certaines tâches associées à des capacités humaines, comme reconnaître des images, traiter du langage ou identifier des tendances dans des données.</p>

              <h3>2. Des exemples dans la vie quotidienne</h3>
              <ul>
                <li>Recommandations de vidéos et de musiques.</li>
                <li>Reconnaissance vocale.</li>
                <li>Traduction automatique.</li>
                <li>Assistants conversationnels.</li>
                <li>Analyse d'images.</li>
              </ul>

              <h3>3. L'IA n'est pas magique</h3>
              <p>Un système d'IA dépend de données, de modèles, de méthodes d'entraînement et de règles de fonctionnement. Ses résultats peuvent être utiles, mais aussi incomplets ou incorrects.</p>

              <h3>4. Utiliser l'IA avec discernement</h3>
              <p>Vérifie les informations importantes, protège tes données personnelles et garde ton esprit critique.</p>

              <h3>Exercice pratique</h3>
              <p>Donne trois exemples d'utilisation de l'IA et explique ce que chaque outil essaie de faire.</p>
            `
          },
          {
            title: "Comprendre les données et les modèles",
            content: `
              <h3>1. Les données</h3>
              <p>Les données sont des informations utilisées par un système informatique. Elles peuvent être des textes, des nombres, des images ou des sons.</p>

              <h3>2. Le modèle</h3>
              <p>Un modèle d'IA est un système construit pour reconnaître des relations dans les données et produire des résultats selon une tâche donnée.</p>

              <h3>3. L'entraînement</h3>
              <p>Pendant l'entraînement, certaines méthodes ajustent les paramètres du modèle afin d'améliorer ses résultats sur une tâche. La qualité et la diversité des données comptent beaucoup.</p>

              <h3>4. Les limites</h3>
              <p>Des données insuffisantes ou déséquilibrées peuvent conduire à des résultats peu fiables. Un modèle peut aussi se tromper lorsqu'il rencontre une situation différente de celles qu'il a apprises.</p>

              <h3>Exercice pratique</h3>
              <p>Imagine un système qui classe des photos de fruits. Quelles données lui faudrait-il pour apprendre à distinguer des pommes et des bananes ?</p>
            `
          }
        ]
      },
      {
        title: "Module 2 — Utiliser et concevoir avec l'IA",
        lessons: [
          {
            title: "Bien rédiger ses instructions",
            content: `
              <h3>1. Qu'est-ce qu'une instruction ?</h3>
              <p>Une instruction, souvent appelée prompt, est une demande adressée à un système d'IA. Sa qualité influence la pertinence de la réponse.</p>

              <h3>2. Les éléments d'une bonne demande</h3>
              <ul>
                <li>Le contexte : expliquer la situation.</li>
                <li>L'objectif : préciser ce que tu veux obtenir.</li>
                <li>Les contraintes : indiquer les limites.</li>
                <li>Le format : demander une réponse structurée.</li>
              </ul>

              <h3>3. Exemple</h3>
              <pre><code>Explique les bases de HTML
à un débutant.
Utilise des exemples simples,
puis donne un exercice corrigé.</code></pre>

              <h3>4. Améliorer une réponse</h3>
              <p>Si la réponse est trop courte ou trop compliquée, précise ce qui doit être développé. Tu peux demander une explication progressive ou un exemple supplémentaire.</p>

              <h3>Exercice pratique</h3>
              <p>Rédige une instruction qui demande à l'IA d'expliquer les variables en JavaScript avec un exemple et un exercice.</p>
            `
          },
          {
            title: "Créer un petit projet avec l'IA",
            content: `
              <h3>1. Partir d'un besoin</h3>
              <p>Un bon projet commence par un problème à résoudre. L'IA peut aider à organiser les idées, proposer des pistes et expliquer du code.</p>

              <h3>2. Exemple de projet</h3>
              <p>Imagine une application qui aide un étudiant à organiser ses révisions. Elle pourrait contenir une liste de matières, un calendrier et des rappels.</p>

              <h3>3. Les étapes</h3>
              <ol>
                <li>Définir l'objectif du projet.</li>
                <li>Écrire la liste des fonctionnalités.</li>
                <li>Créer une première interface.</li>
                <li>Tester chaque fonctionnalité.</li>
                <li>Améliorer le résultat.</li>
              </ol>

              <h3>4. Vérifier le travail de l'IA</h3>
              <p>Ne copie pas aveuglément le code proposé. Lis-le, teste-le et demande une explication si tu ne comprends pas une partie.</p>

              <h3>Exercice pratique</h3>
              <p>Propose un projet numérique utile à ton école ou à ta communauté. Décris son objectif et trois fonctionnalités.</p>
            `
          }
        ]
      }
    ]
  },

  security: {
    title: "Cybersécurité éthique",
    modules: [
      {
        title: "Module 1 — Comprendre la sécurité",
        lessons: [
          {
            title: "Les principes de la cybersécurité",
            content: `
              <h3>1. Qu'est-ce que la cybersécurité ?</h3>
              <p>La cybersécurité consiste à protéger les appareils, les comptes, les réseaux et les informations contre les accès non autorisés, les erreurs et les incidents numériques.</p>

              <h3>2. Les trois principes fondamentaux</h3>
              <ul>
                <li><strong>Confidentialité :</strong> seules les personnes autorisées accèdent aux informations.</li>
                <li><strong>Intégrité :</strong> les données ne sont pas modifiées sans autorisation.</li>
                <li><strong>Disponibilité :</strong> les services restent accessibles aux utilisateurs autorisés.</li>
              </ul>

              <h3>3. La responsabilité</h3>
              <p>La sécurité informatique exige le respect des lois, des personnes et des systèmes. Une vérification de sécurité doit être réalisée uniquement sur un environnement que tu possèdes ou pour lequel tu as reçu une autorisation explicite.</p>

              <h3>4. Les métiers</h3>
              <p>Les spécialistes peuvent travailler dans la protection des systèmes, l'analyse des risques, la réponse aux incidents, l'audit autorisé ou la sensibilisation.</p>

              <h3>Exercice pratique</h3>
              <p>Donne un exemple de problème qui menace la confidentialité, un autre qui menace l'intégrité et un dernier qui menace la disponibilité.</p>
            `
          },
          {
            title: "Protéger ses comptes et ses appareils",
            content: `
              <h3>1. Les mots de passe</h3>
              <p>Un mot de passe unique et suffisamment robuste réduit les risques liés à la réutilisation des identifiants. Un gestionnaire de mots de passe peut aider à conserver des identifiants différents.</p>

              <h3>2. L'authentification à plusieurs facteurs</h3>
              <p>La double authentification ajoute une vérification supplémentaire lors de la connexion. Elle peut utiliser une application d'authentification ou une autre méthode sécurisée.</p>

              <h3>3. Les mises à jour</h3>
              <p>Les mises à jour corrigent des problèmes et améliorent la sécurité. Il est important de maintenir les applications et les systèmes à jour.</p>

              <h3>4. Les sauvegardes</h3>
              <p>Conserve des copies de tes fichiers importants dans un emplacement sûr. Vérifie de temps en temps que les sauvegardes peuvent réellement être restaurées.</p>

              <h3>Exercice pratique</h3>
              <p>Établis une liste de cinq bonnes habitudes pour mieux protéger un compte numérique.</p>
            `
          },
          {
            title: "Reconnaître les risques numériques",
            content: `
              <h3>1. Les messages trompeurs</h3>
              <p>Certains messages tentent de pousser les utilisateurs à communiquer des informations confidentielles ou à ouvrir des liens douteux. Cette pratique est souvent appelée hameçonnage ou phishing.</p>

              <h3>2. Les signes à vérifier</h3>
              <ul>
                <li>Une demande urgente ou inhabituelle.</li>
                <li>Une adresse d'expéditeur qui semble incorrecte.</li>
                <li>Une demande de mot de passe ou de code de connexion.</li>
                <li>Un lien qui ne correspond pas au site officiel.</li>
              </ul>

              <h3>3. Que faire ?</h3>
              <p>Ne communique pas tes codes. Vérifie l'information par un canal officiel et signale les messages suspects au service concerné.</p>

              <h3>Exercice pratique</h3>
              <p>Imagine un message qui prétend venir d'une banque et demande un code de connexion. Explique pourquoi cette demande est suspecte et comment la vérifier sans cliquer sur le lien.</p>
            `
          }
        ]
      },
      {
        title: "Module 2 — Pratique responsable",
        lessons: [
          {
            title: "Les règles du hacking éthique",
            content: `
              <h3>1. Comprendre le hacking éthique</h3>
              <p>Le hacking éthique désigne des activités de vérification de sécurité réalisées avec une autorisation claire et dans un cadre défini.</p>

              <h3>2. L'autorisation est indispensable</h3>
              <p>Un site, un compte, un téléphone ou un réseau qui ne t'appartient pas ne doit pas être testé sans permission. La curiosité ne remplace jamais une autorisation.</p>

              <h3>3. Le cadre d'un exercice</h3>
              <ul>
                <li>Utiliser un laboratoire pédagogique isolé.</li>
                <li>Définir les objectifs de l'exercice.</li>
                <li>Ne pas collecter de données personnelles.</li>
                <li>Respecter les limites fixées par le responsable.</li>
                <li>Documenter les observations de manière responsable.</li>
              </ul>

              <h3>4. Les compétences à développer</h3>
              <p>Apprends d'abord les réseaux, les systèmes d'exploitation, la programmation, la gestion des identités et les principes de protection.</p>

              <h3>Exercice pratique</h3>
              <p>Rédige cinq règles qu'un étudiant doit respecter avant de participer à un exercice de sécurité informatique.</p>
            `
          },
          {
            title: "Découvrir les réseaux informatiques",
            content: `
              <h3>1. Qu'est-ce qu'un réseau ?</h3>
              <p>Un réseau informatique relie plusieurs appareils afin qu'ils puissent échanger des informations et partager des services.</p>

              <h3>2. Quelques notions essentielles</h3>
              <ul>
                <li>Adresse IP : identifiant réseau utilisé pour acheminer les communications.</li>
                <li>Routeur : appareil qui dirige le trafic entre différents réseaux.</li>
                <li>DNS : système qui associe des noms de domaine à des informations réseau.</li>
                <li>HTTPS : protocole de communication Web qui protège les échanges grâce au chiffrement.</li>
              </ul>

              <h3>3. Pourquoi protéger un réseau ?</h3>
              <p>La sécurité d'un réseau repose notamment sur des configurations adaptées, des mises à jour, des accès limités et une surveillance responsable.</p>

              <h3>Exercice pratique</h3>
              <p>Explique avec tes propres mots le rôle d'une adresse IP, d'un routeur et du DNS.</p>
            `
          }
        ]
      }
    ]
  },

  design: {
    title: "Design UI/UX",
    modules: [
      {
        title: "Module 1 — Comprendre le design",
        lessons: [
          {
            title: "Découvrir UI et UX",
            content: `
              <h3>1. UI : l'interface utilisateur</h3>
              <p>UI signifie User Interface. Cela concerne les éléments visibles avec lesquels une personne interagit : boutons, menus, couleurs, textes et formulaires.</p>

              <h3>2. UX : l'expérience utilisateur</h3>
              <p>UX signifie User Experience. Elle concerne la facilité d'utilisation, la compréhension du parcours et la satisfaction de l'utilisateur.</p>

              <h3>3. Une bonne interface</h3>
              <p>Une bonne interface doit aider l'utilisateur à atteindre son objectif. Elle doit être lisible, cohérente et accessible.</p>

              <h3>Exercice pratique</h3>
              <p>Observe une application que tu utilises et identifie trois éléments de son interface qui facilitent son utilisation.</p>
            `
          },
          {
            title: "Couleurs, typographie et hiérarchie",
            content: `
              <h3>1. Les couleurs</h3>
              <p>Les couleurs permettent de distinguer les actions, de créer une ambiance et d'améliorer la compréhension. Il est préférable de conserver une palette cohérente.</p>

              <h3>2. La typographie</h3>
              <p>La taille, l'épaisseur et le style des textes contribuent à leur lisibilité. Les titres doivent être clairement différenciés du texte courant.</p>

              <h3>3. La hiérarchie visuelle</h3>
              <p>Les informations importantes doivent être faciles à repérer. Les espaces et les alignements aident à structurer l'écran.</p>

              <h3>Exercice pratique</h3>
              <p>Imagine une palette de trois couleurs et deux styles de texte pour une plateforme de formation.</p>
            `
          }
        ]
      }
    ]
  },

  mobile: {
    title: "Applications mobiles",
    modules: [
      {
        title: "Module 1 — Concevoir une application",
        lessons: [
          {
            title: "Comprendre les applications mobiles",
            content: `
              <h3>1. Qu'est-ce qu'une application mobile ?</h3>
              <p>Une application mobile est un logiciel conçu pour fonctionner sur un appareil mobile comme un téléphone ou une tablette.</p>

              <h3>2. Les principales plateformes</h3>
              <ul>
                <li>Android : plateforme mobile largement utilisée.</li>
                <li>iOS : système mobile utilisé sur les appareils Apple.</li>
              </ul>

              <h3>3. Les grandes étapes d'un projet</h3>
              <ol>
                <li>Définir le besoin.</li>
                <li>Concevoir les écrans.</li>
                <li>Développer les fonctionnalités.</li>
                <li>Tester sur plusieurs appareils.</li>
                <li>Préparer la distribution.</li>
              </ol>

              <h3>Exercice pratique</h3>
              <p>Imagine une application éducative et décris son objectif, son public et trois fonctionnalités.</p>
            `
          },
          {
            title: "Comprendre les interfaces mobiles",
            content: `
              <h3>1. Les contraintes du téléphone</h3>
              <p>Un écran mobile offre moins d'espace qu'un écran d'ordinateur. Les interfaces doivent donc privilégier les informations utiles et les actions simples.</p>

              <h3>2. Les éléments importants</h3>
              <ul>
                <li>Navigation facile à comprendre.</li>
                <li>Boutons adaptés au toucher.</li>
                <li>Textes lisibles.</li>
                <li>Formulaires simples.</li>
                <li>Retours clairs après une action.</li>
              </ul>

              <h3>3. Tester l'expérience</h3>
              <p>Vérifie le comportement de l'application sur plusieurs tailles d'écran et observe si les utilisateurs comprennent facilement les actions.</p>

              <h3>Exercice pratique</h3>
              <p>Dessine ou décris l'écran d'accueil d'une application de cours.</p>
            `
          }
        ]
      }
    ]
  },

  digital: {
    title: "Culture numérique",
    modules: [
      {
        title: "Module 1 — Maîtriser son environnement",
        lessons: [
          {
            title: "Découvrir les fichiers et dossiers",
            content: `
              <h3>1. Qu'est-ce qu'un fichier ?</h3>
              <p>Un fichier est un ensemble de données conservé sur un appareil. Il peut contenir du texte, une image, une vidéo, du code ou d'autres informations.</p>

              <h3>2. Les extensions</h3>
              <ul>
                <li>.html : document Web.</li>
                <li>.css : feuille de style.</li>
                <li>.js : fichier JavaScript.</li>
                <li>.jpg et .png : images.</li>
                <li>.pdf : document portable.</li>
                <li>.zip : archive compressée.</li>
              </ul>

              <h3>3. Les dossiers</h3>
              <p>Un dossier permet de regrouper des fichiers par projet, par thème ou par fonction. Une bonne organisation facilite la recherche.</p>

              <h3>Exercice pratique</h3>
              <p>Crée un dossier de projet et organise tes documents, images et fichiers de code dans des sous-dossiers.</p>
            `
          },
          {
            title: "Internet et les services numériques",
            content: `
              <h3>1. Comprendre Internet</h3>
              <p>Internet est un réseau mondial qui permet à des appareils et à des services de communiquer. Le Web est l'un des services qui fonctionnent grâce à Internet.</p>

              <h3>2. Quelques services numériques</h3>
              <ul>
                <li>Messagerie électronique.</li>
                <li>Stockage en ligne.</li>
                <li>Réseaux sociaux.</li>
                <li>Visioconférence.</li>
                <li>Plateformes éducatives.</li>
              </ul>

              <h3>3. Protéger ses informations</h3>
              <p>Il est important de vérifier les paramètres de confidentialité, de limiter les informations partagées et de faire attention aux liens et aux pièces jointes.</p>

              <h3>Exercice pratique</h3>
              <p>Choisis trois services numériques que tu utilises et explique leur utilité ainsi qu'une précaution à prendre avec chacun.</p>
            `
          }
        ]
      }
    ]
  }
};

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================

let activeCourse = null;
let allLessons = [];
let activeLessonIndex = 0;

const courseGrid = document.getElementById("courseGrid");
const lessonSection = document.getElementById("lessonSection");
const courseTitle = document.getElementById("courseTitle");
const lessonList = document.getElementById("lessonList");
const lessonModule = document.getElementById("lessonModule");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const previousButton = document.getElementById("previousLesson");
const nextButton = document.getElementById("nextLesson");

// ============================================
// OUVRIR UNE FORMATION
// ============================================

function openCourse(courseId) {
  const course = courses[courseId];

  if (!course) return;

  activeCourse = courseId;
  activeLessonIndex = 0;
  allLessons = [];

  course.modules.forEach((module, moduleIndex) => {
    module.lessons.forEach((lesson, lessonIndex) => {
      allLessons.push({
        ...lesson,
        moduleTitle: module.title,
        moduleIndex,
        lessonIndex
      });
    });
  });

  courseGrid.classList.add("hidden");
  document.querySelector(".section-heading").classList.add("hidden");
  lessonSection.classList.remove("hidden");

  courseTitle.textContent = course.title;

  renderLessonList();
  showLesson(0);

  lessonSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ============================================
// AFFICHER LA LISTE DES LEÇONS
// ============================================

function renderLessonList() {
  lessonList.innerHTML = "";

  let previousModule = "";

  allLessons.forEach((lesson, index) => {
    if (lesson.moduleTitle !== previousModule) {
      const moduleHeading = document.createElement("p");
      moduleHeading.className = "lesson-module-heading";
      moduleHeading.textContent = lesson.moduleTitle;
      lessonList.appendChild(moduleHeading);

      previousModule = lesson.moduleTitle;
    }

    const button = document.createElement("button");
    button.className = "lesson-item";
    button.textContent = `${index + 1}. ${lesson.title}`;

    button.addEventListener("click", () => {
      showLesson(index);
    });

    lessonList.appendChild(button);
  });
}

// ============================================
// AFFICHER UNE LEÇON
// ============================================

function showLesson(index) {
  if (index < 0 || index >= allLessons.length) return;

  activeLessonIndex = index;

  const lesson = allLessons[index];

  lessonModule.textContent = lesson.moduleTitle;
  lessonTitle.textContent = lesson.title;
  lessonText.innerHTML = lesson.content;

  const buttons = lessonList.querySelectorAll(".lesson-item");

  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle(
      "active",
      buttonIndex === index
    );
  });

  previousButton.disabled = index === 0;

  nextButton.textContent =
    index === allLessons.length - 1
      ? "Formation terminée ✓"
      : "Suivant →";

  nextButton.disabled = index === allLessons.length - 1;

  lessonTitle.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ============================================
// NAVIGATION ENTRE LES LEÇONS
// ============================================

previousButton.addEventListener("click", () => {
  showLesson(activeLessonIndex - 1);
});

nextButton.addEventListener("click", () => {
  showLesson(activeLessonIndex + 1);
});

// ============================================
// BOUTONS DES FORMATIONS
// ============================================

document.querySelectorAll("[data-course]").forEach(button => {
  button.addEventListener("click", () => {
    openCourse(button.dataset.course);
  });
});

// ============================================
// RETOUR AUX FORMATIONS
// ============================================

document.getElementById("backButton").addEventListener("click", () => {
  lessonSection.classList.add("hidden");
  courseGrid.classList.remove("hidden");
  document.querySelector(".section-heading").classList.remove("hidden");

  window.scrollTo({
    top: document.getElementById("courses").offsetTop - 70,
    behavior: "smooth"
  });
});

// ============================================
// CONTACTER LE DÉVELOPPEUR
// ============================================

const contactPanel = document.getElementById("contactPanel");

function openContact() {
  contactPanel.classList.remove("hidden");
}

function closeContact() {
  contactPanel.classList.add("hidden");
}

document.getElementById("contactButton")
  .addEventListener("click", openContact);

document.getElementById("footerContact")
  .addEventListener("click", openContact);

document.getElementById("closeContact")
  .addEventListener("click", closeContact);

contactPanel.addEventListener("click", event => {
  if (event.target === contactPanel) {
    closeContact();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeContact();
  }
});

console.log("KAYSEUR ACADEMY : formations chargées.");
