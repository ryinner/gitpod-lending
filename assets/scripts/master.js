window.onload = () => {
  const burgerMenu = document.querySelector('.burger-menu');

  if (burgerMenu === null) {
    throw new Error('Burger menu is not defined');
  }

  document.querySelectorAll('.burger').forEach(e => {
    e.addEventListener('click', () => {
      burgerMenu.classList.toggle('burger-menu--active');
    });
  });
}