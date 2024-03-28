const editForm = document.querySelector('.editForm');
export let toggle = true;
let targetElement;

export function drugDropForm() {
   editForm.addEventListener('click', () => {
      const fieldWrapper = document.querySelectorAll('.fieldWrapper');
      const formLabelStyle = document.querySelectorAll('.formLabelStyle');
      const doctorForm = document.querySelector('.doctorForm');

      if (toggle) {
         editForm.textContent = 'Зберегти зміни';
         fieldWrapper.forEach(elem => {
            elem.style.backgroundColor = '#45494d2c';
            elem.style.cursor = 'move';
            elem.draggable = true;
            elem.addEventListener('dragenter', dragenter);
            elem.addEventListener('dragstart', dragstart);
         });
         formLabelStyle.forEach(elem => {
            elem.style.cursor = 'move';
            elem.addEventListener('dragenter', dragenter);
            elem.addEventListener('dragstart', dragstart);
         });
         doctorForm.addEventListener('dragover', dragover);
         doctorForm.addEventListener('drop', drop);
         toggle = !toggle;
      } else {
         editForm.textContent = 'Змінити форму';
         fieldWrapper.forEach(elem => {
            elem.style.backgroundColor = 'transparent';
            elem.style.cursor = 'default';
            elem.draggable = false;
            elem.removeEventListener('dragenter', dragenter);
            elem.removeEventListener('dragstart', dragstart);
         });
         formLabelStyle.forEach(elem => {
            elem.style.cursor = 'default';
            elem.removeEventListener('dragenter', dragenter);
            elem.removeEventListener('dragstart', dragstart);
         });
         doctorForm.removeEventListener('dragover', dragover);
         doctorForm.removeEventListener('drop', drop);
         toggle = !toggle;
      }
   });
}

function dragstart() {
   this.classList.add('dragElem');
}
function dragenter(event) {
   event.preventDefault();
   targetElement = this;
}
function dragover(event) {
   event.preventDefault();
}
function drop(event) {
   event.preventDefault();
   const draggedElement = document.querySelector('.dragElem');
   this.insertBefore(draggedElement, targetElement);
   draggedElement.classList.remove('dragElem');
}

export function changeDoctor(){
   toggle = !toggle;
   editForm.textContent = 'Змінити форму';
}