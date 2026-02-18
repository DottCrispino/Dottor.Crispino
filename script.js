document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ANIMAZIONE SEZIONI
  ========================= */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  sections.forEach(section => observer.observe(section));


  /* =========================
     STICKY NAVBAR (premium)
  ========================= */
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // crea navbar sticky clonando la nav
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const sticky = document.createElement("div");
  sticky.className = "navbar-sticky";
  sticky.innerHTML = `<div class="nav">${nav.innerHTML}</div>`;
  document.body.appendChild(sticky);

  // mostra dopo un po' di scroll
  window.addEventListener("scroll", () => {
    const trigger = hero.offsetHeight * 0.35;

    if (window.scrollY > trigger) {
      sticky.classList.add("show");
    } else {
      sticky.classList.remove("show");
    }
  });

});
