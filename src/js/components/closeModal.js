
function closeModal (elemSelector){
  const modalElement = document.querySelector(elemSelector);
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
}

export default closeModal;