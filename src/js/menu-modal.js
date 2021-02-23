(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-modal-open]'),
    openModalBurger: document.querySelector('[buy-burger-open]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    closeModalThanks: document.querySelector('[thanks-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBurger.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalThanks.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('buy--is-hidden');
  }
})();