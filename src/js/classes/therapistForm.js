import BaseForm from './baseForm.js';
import { sendData } from '../api/sendData.js';
import { selectDoctor, regNumbOnly, regTextNumbers, doctorSelect } from '../variables.js';
import { TherapistVisit } from '../classes/therapist-visit.js';
import { loadExistingCards } from '../functions/load-existing-cards.js';
import { editCard } from '../api/editCard.js';
import { renderCards } from '../functions/render-cards.js';
class TherapistForm extends BaseForm {
   constructor({ age, fullName, target, date, timeVisit, description, urgency, status, id } = {}) {
      super();
      this.ageEdit = age;
      this.fullNameEdit = fullName;
      this.targetEdit = target;
      this.dateEdit = date;
      this.timeVisitEdit = timeVisit;
      this.descriptionEdit = description;
      this.urgencyEdit = urgency;
      this.id = id;
      this.status = status;
      this.therapistForm = null;
   }

   createDoctorForm() {
      this.therapistForm = this.createForm(
         this.fullNameEdit,
         this.targetEdit,
         this.dateEdit,
         this.descriptionEdit,
         this.timeVisitEdit,
         this.urgencyEdit,
      );
      selectDoctor.value = 'therapist';
      doctorSelect.disabled = !! this.id;

      const uniqueFields = [
         {
            labelValue: 'Вік:',
            attrName: 'age',
            inputType: 'number',
            placeholder: 'від 0 до 122',
            value: this.ageEdit,
         },
      ];
      for (let i = 0; i < uniqueFields.length; i++) {
         this.therapistForm.insertAdjacentHTML(
            'beforeend',
            this.createInput(
               uniqueFields[i].labelValue,
               uniqueFields[i].attrName,
               uniqueFields[i].inputType,
               uniqueFields[i].placeholder,
               uniqueFields[i].value,
            ),
         );
      }
      this.therapistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.therapistForm.addEventListener('submit', this.dataForTherapist);

      return this.therapistForm;
   }
   createObjData(data) {
      const formData = new FormData(data);
      const formObject = {};
      formData.forEach((value, key) => {
         formObject[key] = value;
      });

      const visitData = {
         doctor: 'Терапевт',
         editDate: null,
         status: this.status,
         ...formObject,
      };
      return visitData;
   }

   dataForTherapist = async e => {
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
               const createNewCard = new TherapistVisit(response);
               createNewCard.renderCards();
            }
            this.closeWindow();
         }
         this.resetForm(this.therapistForm);
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
            isValid: regNumbOnly.test(formDataObj.age) && formDataObj.age < 122,
            inputName: 'age',
         },
         {
            isValid: formDataObj.timeVisit !== 'null',
            inputName: 'timeVisit',
         },
      ];
      return this.validationCheck(validations, this.therapistForm);
   }
}

export default TherapistForm;
