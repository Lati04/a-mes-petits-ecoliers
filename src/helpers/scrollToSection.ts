export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
if (el) {
  const headerHeight = document.querySelector('header')?.clientHeight || 80;
  const marginTop = parseInt(window.getComputedStyle(el).marginTop) || 0;
  window.scrollTo({
    top: el.offsetTop - headerHeight - marginTop,
    behavior: 'smooth',
  });
}

};
