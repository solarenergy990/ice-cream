(() => {
    const refs = {
      openModalBtn: document.querySelector('[cream-modal-open]'),
      closeModalBtn: document.querySelector('[cream-modal-close]'),
      closeModalCream: document.querySelector('[cream-buy-close]'),
      modal: document.querySelector('[cream-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalCream.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('hidden');
    }
})();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[coffee-modal-open]'),
      closeModalBtn: document.querySelector('[coffee-modal-close]'),
      closeModalCoffee: document.querySelector('[coffee-buy-close]'),
      modal: document.querySelector('[coffee-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalCoffee.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('hidden');
    }
})();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[milkshakes-modal-open]'),
      closeModalBtn: document.querySelector('[milkshakes-modal-close]'),
      closeModalShakes: document.querySelector('[milkshakes-buy-close]'),
      modal: document.querySelector('[milkshakes-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalShakes.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('hidden');
    }
  })();