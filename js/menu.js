(() => {
  const refsMenu = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu-container]"),
    body: document.querySelector("body"),
  };
  refsMenu.openMenuBtn.addEventListener("click", toggleMenu);
  refsMenu.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refsMenu.menu.classList.toggle("is-hidden");
    refsMenu.body.classList.toggle("no-scroll");
  }
})();
