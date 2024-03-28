import BaseForm from './baseForm.js';
import { sendData } from '../api/sendData.js';
import { selectDoctor, regTextNumbers, doctorSelect } from '../variables.js';
import { DentistVisit } from './dentist-visit.js';
import { loadExistingCards } from '../functions/load-existing-cards.js';
import { editCard } from '../api/editCard.js';
import { renderCards } from '../functions/render-cards.js';
class DentistForm extends BaseForm {
   constructor({
      fullName,
      target,
      date,
      timeVisit,
      description,
      urgency,
      dateOfLastVisit,
      status,
      id,
   } = {}) {
      super();
      this.fullNameEdit = fullName;
      this.targetEdit = target;
      this.dateEdit = date;
      this.timeVisitEdit = timeVisit;
      this.descriptionEdit = description;
      this.urgencyEdit = urgency;
      this.dateOfLastVisitEdit = dateOfLastVisit;
      this.id = id;
      this.status = status;
      this.dentistForm = null;
   }

   createDoctorForm() {
      this.dentistForm = this.createForm(
         this.fullNameEdit,
         this.targetEdit,
         this.dateEdit,
         this.descriptionEdit,
         this.timeVisitEdit,
         this.urgencyEdit,
      );
      selectDoctor.value = 'dentist';
      doctorSelect.disabled = !! this.id;

      this.dentistForm.insertAdjacentHTML(
         'beforeend',
         this.createDatepicker(
            'dateOfLastVisit',
            'Дата останнього візиту:',
            this.dateOfLastVisitEdit,
         ),
      );
      this.dentistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.dentistForm.addEventListener('submit', this.sendDentistData);

      return this.dentistForm;
   }
   createObjData(data) {
      const formData = new FormData(data);
      const formObj = {};
      formData.forEach((value, key) => {
         formObj[key] = value;
      });

      const visitData = {
         doctor: 'Стоматолог',
         editDate: null,
         status: this.status,
         ...formObj,
      };
      return visitData;
   }

   sendDentistData = async e => {
      e.preventDefault();
      const visitData = this.createObjData(e.currentTarget);
      const token = localStorage.getItem('token')
      if (this.isValidForm(visitData)) {
         if (this.id) {
            visitData.editDate = new Date();
            await editCard(this.id, visitData);
            cardContainer.innerHTML = '';
            const allCards = await loadExistingCards(token);
            await renderCards(allCards);
            this.id = null;
            this.closeWindow(true);
         } else {
            visitData.status = true;
            const response = await sendData(visitData);
            if (response) {
               const createNewCard = new DentistVisit(response);
               createNewCard.renderCards();
            }
            this.closeWindow();
         }
         this.resetForm(this.dentistForm);
      }
   };

   isValidForm(formDataObj) {
      const validations = [
         {
            isValid: regTextNumbers.test(formDataObj.target),
            inputName: 'target',
         },
         {
            isValid: formDataObj.fullName.length > 2,
            inputName: 'fullName',
         },
         {
            isValid: regTextNumbers.test(formDataObj.description),
            inputName: 'description',
         },
         {
            isValid: formDataObj.date !== '',
            inputName: 'date',
         },
         {
            isValid: formDataObj.urgency !== 'виберіть терміновість',
            inputName: 'urgency',
         },
         {
            isValid: formDataObj.timeVisit !== 'null',
            inputName: 'timeVisit',
         },
      ];
      return this.validationCheck(validations, this.dentistForm);
   }
}

export default DentistForm;
