// Mostrar/ocultar secciones al hacer clic
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
  
  // Efecto de scroll: revelar secciones al hacer scroll
  const sections = document.querySelectorAll("section");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top < triggerBottom) {
        sec.classList.add("visible");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", () => {
    // Inicializa secciones ocultas
    const habilidades = document.getElementById("habilidades");
    const educacion = document.getElementById("educacion");
  
    if (habilidades) habilidades.style.display = "none";
    if (educacion) educacion.style.display = "none";
  
    revealOnScroll();
  });
  