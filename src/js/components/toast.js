function createTost(textContent, addedClass, removeClass='') {
   const toastTrigger = document.getElementById('liveToastBtn');
   const toastLiveExample = document.getElementById('liveToast');

   if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      const toastBody = document.querySelector('.toast-body');
      toastBody.textContent = textContent;
      toastBody.classList.add(addedClass);
      toastBody.classList.remove(removeClass);

      toastBootstrap.show();
   }
}

export default createTost;
