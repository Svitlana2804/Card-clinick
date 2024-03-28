import { loadExistingCards } from '../functions/load-existing-cards.js';

async function freeTime(doctor, day) {
   const token = localStorage.getItem('token')
   let allCards = await loadExistingCards(token);
   allCards = allCards.filter(elem => elem.doctor === doctor && elem.date === day);
   const timeVisit = allCards.map(elem => elem.timeVisit);
   return timeVisit;
}

export { freeTime };
