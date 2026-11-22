const lessonData = {
  web: {
    title: "Introduction au développement web",
    body: "Un site web utilise généralement trois technologies complémentaires. HTML organise le contenu : titres, paragraphes et images. CSS définit l'apparence : couleurs, tailles et disposition. JavaScript ajoute des interactions. Pour commencer, crée une page avec un titre et un paragraphe, puis personnalise-les avec CSS."
  },
  ai: {
    title: "Comprendre l'intelligence artificielle",
    body: "L'intelligence artificielle regroupe des techniques qui permettent à des systèmes informatiques d'effectuer des tâches comme reconnaître des motifs ou traiter le langage. Elle peut aider à apprendre, mais ses réponses peuvent contenir des erreurs. Vérifie les informations importantes et protège tes données personnelles."
  },
  tools: {
    title: "Bien démarrer avec les outils numériques",
    body: "Un environnement numérique comprend des fichiers, des dossiers, des applications et des services en ligne. Donne des noms clairs à tes fichiers, organise tes projets dans des dossiers et conserve une copie de tes travaux. Une bonne organisation facilite ton apprentissage."
  }
};

const dialog = document.getElementById("accountDialog");

function requestAccount() {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert("La connexion sera bientôt disponible. Les cours gratuits restent accessibles sans compte.");
  }
}

document.getElementById("account").addEventListener("click", requestAccount);
document.getElementById("useAI").addEventListener("click", requestAccount);
document.getElementById("saveProgress").addEventListener("click", requestAccount);
document.getElementById("dismiss").addEventListener("click", () => dialog.close());
document.getElementById("continue").addEventListener("click", () => dialog.close());
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-course]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = lessonData[button.dataset.course];
    if (!item) return;
    document.getElementById("lessonTitle").textContent = item.title;
    document.getElementById("lessonBody").textContent = item.body;
    const panel = document.getElementById("lesson");
    panel.classList.remove("hidden");
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.getElementById("closeLesson").addEventListener("click", () => {
  document.getElementById("lesson").classList.add("hidden");
});
