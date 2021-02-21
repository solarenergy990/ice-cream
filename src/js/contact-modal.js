(() => {
    const refs = {
      openModalBtn: document.querySelector('[contact-modal-open]'),
      closeModalBtn: document.querySelector('[contact-modal-close]'),
      modal: document.querySelector('[contact-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('hidden');
    }
  })();