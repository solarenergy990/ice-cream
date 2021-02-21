(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeModalBurger: document.querySelector('[data-burger-close]'),
    modal: document.querySelector('[data-menu]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBurger.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('menu--is-hidden');
  }
  function removeModal() {
    refs.modal.classList.remove('menu--is-hidden');
  }
})();