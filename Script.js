// Seleziona tutte le sezioni
const sections = document.querySelectorAll("section");

// Configura l'observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      // Quando la sezione entra almeno per il 20% nello schermo
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Se vuoi far apparire solo una volta, puoi smettere di osservare
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // 20% della sezione visibile
    rootMargin: "0px 0px -50px 0px" // fa partire leggermente prima
  }
);

// Avvia l'observer su tutte le sezioni
sections.forEach(section => observer.observe(section));
