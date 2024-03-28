import { simplifyDateToString, convertToDateFormat } from './../functions/date-converters.js';
import { loadExistingCards } from '../functions/load-existing-cards.js';
import { displayNoCards } from '../variables';
import { cardContainer } from '../variables.js';
class Visit {
   constructor(
      date,
      id,
      status = true,
      timeVisit,
      fullName,
      target,
      urgency,
      description,
      editDate = null,
   ) {
      this.status = true; // open/done
      this.id = id;
      this.date = date;
      this.status = status;
      this.timeVisit = timeVisit;
      this.fullName = fullName;
      this.target = target; //мета
      this.urgency = urgency; // терміновість
      this.description = description; // опис
      this.editDate = editDate;
      this.isExpand = false;
   }

   // СТВОРЕННЯ КАРТКИ
   renderCards() {
      const cardItem = document.createElement('li');
      cardItem.classList.add('card__item', 'col-xxl-3', 'col-lg-4', 'col-md-6', 'col-12');
      // cardItem.setAttribute("draggable", "true");
      
      this.cardItem = cardItem;

      this.generateElementContent();

      cardContainer.appendChild(cardItem);
   }

   generateElementContent() {
      this.cardItem.innerHTML = this.generateCardHtml();

      const deleteBtn = this.cardItem.querySelector('.card__btn-close');
      deleteBtn.addEventListener('click', () => this.deleteCard());

      const statusSelect = this.cardItem.querySelector('.card__status-selector');
      statusSelect.addEventListener('change', () => this.changeStatus());

      const editBtn = this.cardItem.querySelector(".card__edit-btn");
      editBtn.addEventListener("click", () => this.editedResponseBody());

      const expandCollapseBtn = this.cardItem.querySelector('.card__expand-collapse-btn');
      expandCollapseBtn.addEventListener('click', () => this.expandCollapseCard());
   }

   checkStatus() {
      const currentDate = new Date();
      const dateOfVisit = new Date(convertToDateFormat(this.date, this.timeVisit));

      if (dateOfVisit >= currentDate) {
         this.status = true;
         this.isDateHadPassed = false;
      } else {
         this.status = false;
         this.isDateHadPassed = true;
         this.editCard()
      }
   }

   // КНОПКА ПОКАЗАТИ БІЛЬШЕ-МЕНШЕ
   expandCollapseCard() {
      const expandCollapseBlock = this.cardItem.querySelector('.card__expand-collapse-container');
      expandCollapseBlock.classList.toggle('card__expand-collapse-container--show');
      if (expandCollapseBlock.classList.contains('card__expand-collapse-container--show')) {
         event.target.innerText = 'Показати менше ⯅';
         this.isExpand = true;
      } else {
         event.target.innerText = 'Показати більше ⯆';
         this.isExpand = false;
      }
   }

   // ВИДАЛЕННЯ ВІЗИТУ І КАРТКИ
   async deleteCard() {
      const token = localStorage.getItem('token');
      try {
         const request = await fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         if (!request.ok) {
            throw new Error('Помилка при видаленні візиту');
         }

         const allCards = await loadExistingCards(token);
         if (allCards.length === 0){
            displayNoCards.style.display = 'flex';
         }
         this.cardItem.remove();
      } catch (e) {
         console.log('Помилка: ', e);
      }
   }

      rewriteEditDate() {
        const currentDate = new Date();
        this.editDate = simplifyDateToString(currentDate);
      }

       // ЗМІНА ДАНИХ ВІЗИТУ І КАРТКИ
      async editCard() {
        const token = localStorage.getItem('token');
        try {
          const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(this)
        })
          if (!response.ok) {
            throw new Error("Помилка при зміні даних візиту");
          }

         this.generateElementContent(this.cardItem);
      } catch (e) {
         console.log('Помилка: ', e);
      }
   }


   // EVENTS ДЛЯ КНОПКИ "АКТИВНИЙ - ЗАВЕРШЕНИЙ"
   changeStatus() {
      if (event.target.value === 'open') {
         this.status = true;
      } else if (event.target.value === 'done') {
         this.status = false;
      }
      this.editCard();
   }
}

export { Visit };
