import { windowToggle } from './components/windowToggle.js';
import { loadExistingCards } from './functions/load-existing-cards.js';
import { renderCards } from './functions/render-cards.js';
import { btnToggleText, displayNoCards, doctorBtnWrapper } from './variables.js';

const openBtn = document.getElementById('openBtn');
const login = document.querySelector('.form');
const closeBtn = document.getElementById('closeBtn');
const createVisit = document.getElementById('create_visit');
const homePage = document.getElementById('home-page');
const navbarFilter = document.getElementById('navbarFilter');
const cardContainer = document.getElementById('cardContainer');

closeBtn.addEventListener('click', async function () {
   //треба функція яка буде закривати форму,зміна  кнопок

   closeBtn.style.display = 'none';
   createVisit.style.display = 'none';
   openBtn.style.display = 'block';
   localStorage.removeItem('token');
   homePage.classList.remove('d-none');
   displayNoCards.style.display = 'none';
   navbarFilter.classList.remove('d-flex-important');
   cardContainer.classList.add('d-none');
   doctorBtnWrapper.classList.add('d-none');
});

// Your token is : e70fac32-b103-4aba-9264-0fe9126991b7

const loginUrl = 'https://ajax.test-danit.com/api/v2/cards/login';
const TOKEN = 'token';
try {
   login.addEventListener('submit', function (event) {
      event.preventDefault();
      const body = {};
      event.target.querySelectorAll('input').forEach(input => {
         body[input.name] = input.value; // дані які будуть передаватися на сервер
      });
      fetch(loginUrl, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email: body.email, password: body.password }), // Використовуйте змінну body для передачі даних
      })
         .then(response => {
            if (!response.ok) {
               throw new Error('Помилка при отриманні запиту');
            }
            return response.text();
         })
         .then(token => {
            localStorage.setItem(TOKEN, token); // Збереження токена в localStorage
            // location.reload();
            renderCardsToPage(token);
            successAuthorization(); // Виклик функції після успішної авторизації
         })
         .catch(error => {
            alert(error.message); // Обробка помилок
         });
   });
} catch (error) {
   alert(error); // Обробка помилок на рівні спроби
}
function successAuthorization() {
   closeBtn.style.display = 'block';
   openBtn.style.display = 'none';
   homePage.classList.add('d-none');
   createVisit.style.display = 'block';
   navbarFilter.classList.add('d-flex-important');
   cardContainer.classList.add('d-flex');
   const modalElement = document.querySelector('.modalsome');
   const modal = bootstrap.Modal.getInstance(modalElement);
   if (modal) {
      modal.hide();
   }
   login.reset();
}
document.addEventListener('DOMContentLoaded', () => {
   const localStorageToken = localStorage.getItem('token');
   if (localStorageToken) {
      successAuthorization();
      renderCardsToPage(localStorageToken);
   }
});
createVisit.addEventListener('click', function () {
   windowToggle();
});

async function renderCardsToPage(token) {
   const allCards = await loadExistingCards(token);
   await renderCards(allCards);
   if (btnToggleText.textContent === 'Перейти до карток') {
      doctorBtnWrapper.classList.add('d-flex');
      doctorBtnWrapper.classList.remove('d-none');
   } else{
      cardContainer.classList.add('d-flex');
      cardContainer.classList.remove('d-none');
   }
}
