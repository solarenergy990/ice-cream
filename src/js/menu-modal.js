(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-modal-open]'),
    openModalBurger: document.querySelector('[buy-burger-open]'),
    openModalCream: document.querySelector('[buy-cream-open]'),
    openModalCoffee: document.querySelector('[buy-coffee-open]'),
    openModalShakes: document.querySelector('[buy-milkshakes-open]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    closeModalThanks: document.querySelector('[buy-modal-remove]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBurger.addEventListener('click', toggleModal);
  refs.openModalCream.addEventListener('click', toggleModal);
  refs.openModalCoffee.addEventListener('click', toggleModal);
  refs.openModalShakes.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalThanks.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('buy--is-hidden');
  }
})();