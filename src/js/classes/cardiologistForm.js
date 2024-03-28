import BaseForm from './baseForm.js';
import { sendData } from '../api/sendData.js';
import { selectDoctor, regTextNumbers, regNumbOnly, doctorSelect } from '../variables.js';
import { CardiologistVisit } from '../classes/cardiologist-visit.js';
import { loadExistingCards } from '../functions/load-existing-cards.js';
import { editCard } from '../api/editCard.js';
import { renderCards } from '../functions/render-cards.js';
class CardiologistForm extends BaseForm {
   constructor({
      disease,
      age,
      indexBM,
      fullName,
      target,
      date,
      pressureLower,
      pressureHigh,
      timeVisit,
      description,
      urgency,
      status,
      id = null,
   } = {}) {
      super();
      this.diseaseEdit = disease;
      this.ageEdit = age;
      this.indexBMEdit = indexBM;
      this.fullNameEdit = fullName;
      this.targetEdit = target;
      this.dateEdit = date;
      this.timeVisitEdit = timeVisit;
      this.descriptionEdit = description;
      this.urgencyEdit = urgency;
      this.id = id;
      this.pressureLower = pressureLower;
      this.pressureHigh = pressureHigh;
      this.status = status;
      this.cardiologistForm = null;
   }

   createDoctorForm() {
      this.cardiologistForm = this.createForm(
         this.fullNameEdit,
         this.targetEdit,
         this.dateEdit,
         this.descriptionEdit,
         this.timeVisitEdit,
         this.urgencyEdit,
      );
      selectDoctor.value = 'cardiologist';
      doctorSelect.disabled = !! this.id;

      const uniqueFields = [
         {
            labelValue: 'Перенесені хвороби:',
            attrName: 'disease',
            inputType: 'text',
            placeholder: 'наприклад: гіпертонія, аритмія',
            value: this.diseaseEdit,
         },
         {
            labelValue: 'Вік:',
            attrName: 'age',
            inputType: 'number',
            placeholder: 'від 0 до 122',
            value: this.ageEdit,
         },
         {
            labelValue: 'ІМТ: ',
            attrName: 'indexBM',
            inputType: 'text',
            placeholder: 'наприклад: 24.5',
            value: this.indexBMEdit,
         },
      ];
      let newFields = '';
      for (let i = 0; i < uniqueFields.length; i++) {
         newFields += this.createInput(
            uniqueFields[i].labelValue,
            uniqueFields[i].attrName,
            uniqueFields[i].inputType,
            uniqueFields[i].placeholder,
            uniqueFields[i].value,
         );
      }

      this.cardiologistForm.insertAdjacentHTML('beforeend', newFields);

      if (this.pressureLower && this.pressureHigh) {
         this.cardiologistForm.insertAdjacentHTML(
            'beforeend',
            `
               <div class = 'input-group flex-column fieldWrapper mt-2'>
                  <label class = 'nput-group-text formLabelStyle' for='bloodPressure'>Звичайний тиск</label>
                  <div class = 'd-flex bloodPressureInputWrapper'>
                   <input class = 'form-control formInputStyle bloodPressureInput' value='${this.pressureLower}' placeholder="80" type="number" id='bloodPressure' name='pressureLower' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
                   <span class='mx-3 fs-2'> / </span>
                   <input class = 'form-control formInputStyle bloodPressureInput' value='${this.pressureHigh}' placeholder="120" type="number" name='pressureHigh' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
                  </div>
               </div>
            `,
         );
      } else {
         this.cardiologistForm.insertAdjacentHTML(
            'beforeend',
            `
               <div class = 'input-group flex-column fieldWrapper mt-2'>
                  <label class = 'nput-group-text formLabelStyle' for='bloodPressure'>Звичайний тиск</label>
                  <div class = 'd-flex bloodPressureInputWrapper'>
                   <input class = 'form-control formInputStyle bloodPressureInput' placeholder="80" type="number" id='bloodPressure' name='pressureLower' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
                   <span class='mx-3 fs-2'> / </span>
                   <input class = 'form-control formInputStyle bloodPressureInput' placeholder="120" type="number" name='pressureHigh' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
                  </div>
               </div>
            `,
         );
      }

      this.cardiologistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.cardiologistForm.addEventListener('submit', this.sendCardiologistData);

      return this.cardiologistForm;
   }

   createObjData(data) {
      const formData = new FormData(data);
      const formObj = {};
      formData.forEach((value, key) => {
         formObj[key] = value;
      });

      const visitData = {
         doctor: 'Кардіолог',
         editDate: null,
         status: this.status,
         ...formObj,
      };
      return visitData;
   }

   sendCardiologistData = async e => {
      e.preventDefault();
      const token = localStorage.getItem('token')
      const visitData = this.createObjData(e.currentTarget);
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
               const createNewCard = new CardiologistVisit(response);
               createNewCard.renderCards();
            }
            this.closeWindow();
         }
         this.resetForm(this.cardiologistForm);
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
            isValid: regNumbOnly.test(formDataObj.pressureLower) && formDataObj.pressureLower < 300,
            inputName: 'pressureLower',
         },
         {
            isValid: regNumbOnly.test(formDataObj.pressureHigh) && formDataObj.pressureHigh < 300,
            inputName: 'pressureHigh',
         },
         {
            isValid:
               regNumbOnly.test(formDataObj.indexBM) &&
               formDataObj.indexBM > 1 &&
               formDataObj.indexBM < 50,
            inputName: 'indexBM',
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
      return this.validationCheck(validations, this.cardiologistForm);
   }
}

export default CardiologistForm;
