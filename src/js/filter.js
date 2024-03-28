import { renderCards } from './functions/render-cards.js';
import { loadExistingCards } from './functions/load-existing-cards.js';
import { displayNoCards } from './variables.js';

const open = document.querySelector('.open');
const close = document.querySelector('.done');
const urgent = document.querySelector('.urgency');
const priority = document.querySelector('.priority');
const common = document.querySelector('.common');
const cardsClient = document.querySelector('.cards_client');
const cardsPriority = document.querySelector('.cards_priority');

cardsClient.addEventListener('click', showAllCards);
cardsPriority.addEventListener('click', showAllCards);

async function showAllCards() {
   const token = localStorage.getItem('token');
   document.getElementById('cardContainer').innerHTML = '';
   let allCards = await loadExistingCards(token);
   renderCards(allCards);
   if (allCards.length !== 0) {
      displayNoCards.style.display = 'none';
   }
}

// Функції фільтрації для вибору карток за статусом "open,done,high,normal,low"
async function chooseCardStatus(status) {
   const token = localStorage.getItem('token');
   let allCards = await loadExistingCards(token);
   document.getElementById('cardContainer').innerHTML = '';
   const filterCards = allCards.filter(card => {
      const cardStatus = card.status;
      return cardStatus === JSON.parse(status);
   });
   if (allCards.length !== 0) {
      displayNoCards.style.display = 'none';
   }
   await renderCards(filterCards);
}
// Додаємо обробники подій для кнопок "Open" і "Done"
open.addEventListener('click', async function () {
   const openCards = await chooseCardStatus('true');
});

close.addEventListener('click', async function () {
   const doneCards = await chooseCardStatus('false');
});

async function chooseCardUrgency(urgency) {
   const token = localStorage.getItem('token');
   let allCards = await loadExistingCards(token);
   document.getElementById('cardContainer').innerHTML = '';
   renderCards(allCards.filter(allCards => allCards.urgency === urgency));
   if (allCards.length !== 0) {
      displayNoCards.style.display = 'none';
   }
}

//Додаю обробник події для кнопок high,normal,low

urgent.addEventListener('click', function () {
   const urgentCards = chooseCardUrgency('urgent');
});
common.addEventListener('click', function () {
   const commonCards = chooseCardUrgency('common');
});
priority.addEventListener('click', function () {
   const priorityCards = chooseCardUrgency('priority');
});
