import { CardiologistVisit } from '../classes/cardiologist-visit';
import { DentistVisit } from '../classes/dentist-visit.js';
import { TherapistVisit } from '../classes/therapist-visit.js';
import { cardContainer } from '../variables.js';
import { displayNoCards } from '../variables.js';

export async function renderCards(cardsArr) {
   cardContainer.innerHTML = '';
   await cardsArr.forEach(card => {
      let loadedVisit;
      function startRenderCard() {
         if (loadedVisit.status === true) {
            loadedVisit.checkStatus();
         }

         loadedVisit.renderCards();
      }

      switch (card.doctor) {
         case 'Стоматолог':
            loadedVisit = new DentistVisit(card);
            startRenderCard();
            break;
         case 'Терапевт':
            loadedVisit = new TherapistVisit(card);
            startRenderCard();
            break;
         case 'Кардіолог':
            loadedVisit = new CardiologistVisit(card);
            startRenderCard();
            break;
      }
   });
   if(cardsArr.length === 0){
      displayNoCards.style.display = 'flex';
   }
}
