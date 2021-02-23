(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-thanks-open]'),
    closeModalBtn: document.querySelector('[modal-thanks-close]'),
    modal: document.querySelector('[modal-thanks]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('thanks--is-hidden');
  }
})();