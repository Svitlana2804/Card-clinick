import { btnToggleText, displayNoCards, doctorBtnWrapper } from '../variables.js';
import { cardContainer } from '../variables.js';
import { loadExistingCards } from '../functions/load-existing-cards.js';

let isCreateVisitBtn = false;
const icon = document.querySelector('#svgPlus');

export async function windowToggle(showCards) {
   if (showCards) {
      isCreateVisitBtn = true;
      changeBtnGetCards();
   }
   doctorBtnWrapper.classList.toggle('d-none', isCreateVisitBtn);
   cardContainer.classList.toggle('d-none', !isCreateVisitBtn);
   isCreateVisitBtn = !isCreateVisitBtn;
   isCreateVisitBtn ? changeBtnGetCards() : restoreCreateVisitButton();

   if (isCreateVisitBtn) {
      displayNoCards.style.display = 'none';
   } else {
    const token = localStorage.getItem('token');
      const allCards = await loadExistingCards(token);
      if (allCards.length === 0) {
         displayNoCards.style.display = 'flex';
      }
   }
}

function changeBtnGetCards() {
   btnToggleText.textContent = 'Перейти до карток';
   icon.classList.add('d-none');
   btnToggleText.classList.add('buttonGetCards');
}
function restoreCreateVisitButton() {
   btnToggleText.textContent = 'Додати візит';
   icon.classList.remove('d-none');
   btnToggleText.classList.remove('buttonGetCards');
}
