export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerHeight = header?.clientHeight || 80;

  // On cherche la vague juste avant la section (si elle existe)
  const prevWave = el.previousElementSibling?.classList.contains("wave-separator")
    ? el.previousElementSibling
    : null;

  // Hauteur réelle de la vague (mobile ou desktop)
  const waveHeight = prevWave ? prevWave.clientHeight : 0;

  const marginTop = parseInt(window.getComputedStyle(el).marginTop) || 0;

  window.scrollTo({
    top: el.offsetTop - headerHeight - marginTop - waveHeight,
    behavior: "smooth",
  });
};
