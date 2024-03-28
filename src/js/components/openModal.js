function openModal(elemSelector) {
   const modalElement = document.querySelector(elemSelector);
   const modal = new bootstrap.Modal(modalElement);
   modal.show();
}

export default openModal;
