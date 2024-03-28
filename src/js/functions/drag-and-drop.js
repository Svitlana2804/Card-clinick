import { cardContainer } from '../variables.js';

let draggedItem = null;
let currentItem = null;
let cards = [];

cardContainer.addEventListener('dragstart', function (event) {
   if (!event.target.classList.contains('card__container')) {
      return;
   }
   dragStart(event);
});

cardContainer.addEventListener('dragend', function (event) {
   if (!event.target.classList.contains('card__container')) {
      return;
   }
   dragEnd(event);
});

cardContainer.addEventListener('dragover', function (event) {
   dragOver(event);
});

cardContainer.addEventListener('dragenter', function (event) {
   if (event.target.classList.contains('card__container')) {
      dragEnter(event.target);
   } else if (event.target.closest('.card__container')) {
      dragEnter(event.target.closest('.card__container'));
   } else {
      return;
   }
});

cardContainer.addEventListener('dragleave', function (event) {
   if (!event.target.classList.contains('card__container')) {
      return;
   }
   dragLeave(event);
});

cardContainer.addEventListener('drop', function (event) {
   if (event.target.classList.contains('card__container')) {
      drop(event);
   } else if (event.target.closest('.card__container')) {
      drop(event.target.closest('.card__container'));
   } else {
      return;
   }
});

function dragStart(event) {
   draggedItem = event.target;

   event.target.style.opacity = '0.4';
}

function dragEnd(event) {
   draggedItem.style.opacity = '1';
   draggedItem = null;
   removeOverClassFromAllCards();
}

function dragOver(event) {
   if (event.preventDefault) {
      event.preventDefault();
   }
   return false;
}

function dragEnter(cardContainer) {
   removeOverClassFromAllCards();

   currentItem = cardContainer;

   if (currentItem != draggedItem) {
      currentItem.classList.add('card__over');
   }
}

function dragLeave(event) {
   if (!event.relatedTarget) {
      return;
   }
   if (!event.relatedTarget.closest('.card__container')) {
    removeOverClassFromAllCards();
      currentItem = null;
   }
}

function drop(event) {
   if (!currentItem || !draggedItem) {
      return;
   }
   currentItem.classList.remove('card__over');

   let draggedItemLi = draggedItem.closest('.card__item');
   let currentItemLi = currentItem.closest('.card__item');

   cards = Array.from(cardContainer.querySelectorAll('.card__item'));

   let indexOfDraggedItem = cards.indexOf(draggedItemLi);
   let indexOfCurrentItem = cards.indexOf(currentItemLi);

   if (indexOfDraggedItem > indexOfCurrentItem) {
      currentItemLi.insertAdjacentElement('beforebegin', draggedItemLi);
   } else if (indexOfDraggedItem < indexOfCurrentItem) {
      currentItemLi.insertAdjacentElement('afterend', draggedItemLi);
   }
   removeOverClassFromAllCards();
}

function findCardContainer(event) {
   let cardContainer;

   if (event.target.classList.contains('card__item')) {
      cardContainer = event.target.firstElementChild;
   } else if (event.target.closest('.card__container')) {
      cardContainer = event.target.closest('.card__container');
   } else if (event.target.classList.contains('card__container')) {
      cardContainer = event.target;
   } else {
      return;
   }
   return cardContainer;
}

function removeOverClassFromAllCards() {
   cards = cardContainer.querySelectorAll('.card__container');
   cards.forEach(card => {
      card.classList.remove('card__over');
   });
}
