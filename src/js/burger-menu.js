(() => {
  const refs = {
    openModalBtn: document.querySelector('[burger-menu-open]'),
    closeModalBtn: document.querySelector('[burger-menu-close]'),
    closeModalBurger: document.querySelector('[burger-menu-move]'),
    // closeModalBurger: document.querySelector('[burger-menu-remove]'),
    modal: document.querySelector('[burger-menu]'),
    burger: document.querySelector('[burger-icon]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBurger.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('menu--is-hidden');
  }

  refs.openModalBtn.addEventListener('click', toggleBurger);
  refs.closeModalBurger.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('is-open');
  }

})();