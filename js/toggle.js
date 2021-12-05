const _elements = {
  navbarList: document.querySelector(".navbar-list"),
  toggle: document.querySelector(".navbar-header__toggle")
}

_elements.toggle.addEventListener('click', () => {
  _elements.navbarList.classList.toggle("navbar-list--show-links")
});
