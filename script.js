// Animación intro que desaparece después de 4 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 2000);
});
