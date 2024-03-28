import { renderCards } from './functions/render-cards.js';
import { loadExistingCards } from './functions/load-existing-cards.js';
import { btnToggleText, displayNoCards } from './variables.js';
const searchInput = document.getElementById('search-input');
const cleanText = document.querySelector('.clean-text');

cleanText.addEventListener('click', async () => {
   const token = localStorage.getItem('token');
   let allCards = await loadExistingCards(token);
   renderCards(allCards);
   searchInput.value = '';
   cleanText.classList.add('d-none');
   displayNoCards.style.display = 'none';
});
searchInput.addEventListener('input', async () => {
   if (searchInput.value !== '') {
      cleanText.classList.remove('d-none');
   } else {
      const token = localStorage.getItem('token');
      let allCards = await loadExistingCards(token);
      renderCards(allCards);
      cleanText.classList.add('d-none');
      displayNoCards.style.display = 'none';
   }
});

const filter = async function (e) {
   if (btnToggleText.textContent !== 'Перейти до карток') {
      const token = localStorage.getItem('token');
      try {
         let allCards = await loadExistingCards(token);
         const inputSearch = document.getElementById('search-input');
         if (inputSearch.value !== '') {
            allCards = allCards.filter(({ fullName }) => fullName?.includes(inputSearch.value));
            document.getElementById('cardContainer').innerHTML = '';
            renderCards(allCards);
            if (allCards.length !== 0) {
               displayNoCards.style.display = 'none';
            }
         }
      } catch (error) {
         console.error('Error in filter:', error);
      }
   } 
};

const addFilterListener = function () {
   const searchBtn = document.getElementById('search_btn');
   searchBtn.addEventListener('click', filter);
};

addFilterListener();
