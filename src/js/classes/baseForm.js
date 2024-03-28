import { endWorking } from '../variables.js';
import { selectDoctor } from '../variables.js';
import closeModal from '../components/closeModal.js';
import { freeTime } from '../components/freeTime';
import { windowToggle } from '../components/windowToggle.js';
class BaseForm {
   date = new Date();
   isToday = false;

   getCurrentDate() {
      const year = this.date.getFullYear();
      const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
      const day = this.date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
   }

   createInput(fieldName, attributeNameValue = '', type, placeholder = '', value = '') {
      if (attributeNameValue === 'indexBM') {
         return `
            <div class = 'input-group flex-column fieldWrapper mt-2'>
               <label class = 'nput-group-text formLabelStyle' for='${attributeNameValue}'>${fieldName}</label>
               <input class = 'form-control formInputStyle' value='${value}' placeholder='${placeholder}' type="${type}" id='${attributeNameValue}' name='${attributeNameValue}' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
               <a tabindex="0" class="btn btn-sm text-start"  id="countImt" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Визначення індексу маси тіла" data-bs-content="Щоб визначити індекс маси тіла, спочатку потрібно виміряти зріст (у метрах) і вагу (у кілограмах). Формула: ІМТ = Вага / (Зріст * Зріст)">Детальніше як розрахувати <u>тут</u></a>
            </div>
          `;
      }
      return `
      <div class = 'input-group flex-column fieldWrapper mt-2'>
         <label class = 'nput-group-text formLabelStyle' for='${attributeNameValue}'>${fieldName}</label>
         <input class = 'form-control formInputStyle' value='${value}' placeholder='${placeholder}' type="${type}" id='${attributeNameValue}' name='${attributeNameValue}' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>
      </div>
      `;
   }

   createTextArea(fieldName, attributeNameValue = '', description = '') {
      return `
      <div class = 'form-floating fieldWrapper mt-2'>
         <textarea class = 'form-control formTextareaStyle' placeholder = '${fieldName}' id='floatingTextarea' name='${attributeNameValue}'>${description}</textarea>
         <label class = 'nput-group-text start-10' for='floatingTextarea'>${fieldName}</label>
      </div>
  `;
   }

   createSelect(options, attributeNameValue = '', textContent = '', value = '') {
      let selectHTML = `
      <div class="d-flex flex-column fieldWrapper mt-2">
        <label class="formLabelStyle" for="${attributeNameValue}">${textContent}</label>
        <select id="${attributeNameValue}" value="${value}" name="${attributeNameValue}" aria-label="Small select example" class="form-select form-select-sm formInputStyle">
    `;
      if (options.length === 0) {
         selectHTML += `<option value="null">Виберіть інший день</option>`;
      } else {
         for (let i = 0; i < options.length; i++) {
            if (options[i].optionValue === value) {
               selectHTML += `<option value="${options[i].optionValue}" selected>${options[i].textContent}</option>`;
            } else {
               selectHTML += `<option value="${options[i].optionValue}">${options[i].textContent}</option>`;
            }
         }
      }
      selectHTML += `
        </select>
      </div>
    `;
      return selectHTML;
   }

   createDatepicker(inputName, labelText, date = '') {
      return `
      <div class="flex-column input-group fieldWrapper mt-2">
        <label for="${inputName}" class="form-label formLabelStyle m-0">${labelText}</label>
        <input
          type="date"
          id="${inputName}"
          name="${inputName}"
          class="visit-form-date border formInputStyle "
          value="${date}"
          title="Дата візиту"
          ${
             inputName === 'dateOfLastVisit'
                ? `max="${this.getCurrentDate()}"`
                : `min="${this.getCurrentDate()}"`
          }
        />
      </div>
    `;
   }

   checkForToday = e => {
      this.isToday = this.getCurrentDate().toString() === e.target.value.toString() ? true : false;
   };

   createAppointmentHours(timeVisit = '') {
      return this.createSelect(this.visitHours(), 'timeVisit', 'Час візиту:', timeVisit);
   }

   async newTime(doctor, day) {
      const data = await freeTime(doctor, day);
      let optionsTime = this.visitHours();

      data.forEach(dataItem => {
         optionsTime = optionsTime.filter(elem => {
            return elem.optionValue !== dataItem;
         });
      });

      return this.createSelect(optionsTime, 'timeVisit', 'Час візиту');
   }

   visitHours() {
      let optionsTime = [];
      let startWorking = 8;

      if (this.isToday) {
         startWorking = this.date.getHours() + 1;
      }
      for (let i = startWorking; i <= endWorking; i++) {
         const time = `${i.toString().padStart(2, 0)}:00`;
         optionsTime.push({
            optionValue: time,
            textContent: time,
         });
      }
      return optionsTime;
   }

   createBtn(marker) {
      if (marker) {
         return `
         <div class="d-grid gap-2 col-6 w-100 mt-4 formBtnStyleWrapper">
           <button type="submit" class="btn btn-primary formBtnStyle formBtnStyleEdit"  id="liveToastBtn">
           <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 512 512">
           <g fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="50" class="color000 svgShape" data-name="Check Mark">
             <path d="M8.5 8.5h495v495H8.5z" class="colorStroke202020 svgStroke"/>
             <path d="m141.47 239.88 87.1 87.1 141.96-141.96"/>
           </g>
         </svg>
           Змінити дані візиту</button>
         </div>
       `;
      }
      return `
      <div class="d-grid gap-2 col-6 w-100 mt-4 formBtnStyleWrapper">
        <button type="submit" class="btn btn-primary formBtnStyle"  id="liveToastBtn">
        <svg xmlns="http://www.w3.org/2000/svg" class='me-2' width="19" height="19" fill="none"><g fill="#fff" clip-path="url(#a)"><path fill-opacity=".01" d="M.276 0h16v16h-16z"/><g clip-path="url(#b)"><path d="M14.275 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12Zm-12-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-12Z"/><path d="M8.275 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 1 1 0 1h-3v3a.5.5 0 1 1-1 0v-3h-3a.5.5 0 1 1 0-1h3v-3a.5.5 0 0 1 .5-.5Z"/></g></g><defs><clipPath id="a"><path fill="#fff" d="M.276 0h16v16h-16z"/></clipPath><clipPath id="b"><path fill="#fff" d="M.276 0h16v16h-16z"/></clipPath></defs></svg>
        Створити візит</button>
      </div>
    `;
   }

   createForm(fullName, target, date, description, timeVisit, urgency) {
      selectDoctor.value = 'choose';
      const form = document.createElement('form');
      form.classList.add(
         'row',
         'g-3',
         'needs-validation',
         'd-flex',
         'px-3',
         'flex-wrap',
         'justify-content-between',
         'doctorForm',
      );
      form.insertAdjacentHTML('beforeend', this.createFormFields(fullName, target, date, description, timeVisit, urgency));

      return form;
   }

   createFormFields(fullName, target, date, description, timeVisit, urgency) {
      const optionsArr = [
         {
            optionValue: 'виберіть терміновість',
            textContent: 'виберіть терміновість',
         },
         {
            optionValue: 'common',
            textContent: 'звичайна',
         },
         {
            optionValue: 'priority',
            textContent: 'пріоритетна',
         },
         {
            optionValue: 'urgent',
            textContent: 'невідкладна',
         },
      ];
      const formFields =
         this.createInput(
            'Прізвище Ім’я По-батькові:',
            'fullName',
            'text',
            'Іванова Ірина Володимирівна',
            fullName,
         ) +
         this.createDatepicker('date', 'Дата візиту:', date) +
         this.createInput('Мета візиту:', 'target', 'text', 'Поставлення діагнозу', target) +
         this.createAppointmentHours(timeVisit) +
         this.createSelect(optionsArr, 'urgency', 'Терміновість візиту:', urgency) +
         this.createTextArea('Опис:', 'description', description);
      return formFields;
   }

   validationCheck(validations, form) {
      const isValid = validations.map(validation => {
         const elem = form[validation.inputName];
         if (!validation.isValid) {
            elem.classList.add('is-invalid');
            elem.classList.remove('is-valid');
            return false;
         } else {
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
            return true;
         }
      });
      return isValid.every(elem => elem === true);
   }

   closeWindow(showCards) {
      closeModal('.modalVisit');
      windowToggle(showCards);
   }

   resetForm(form) {
      form.reset();
      Array.from(form.elements).forEach(elem => elem.classList.remove('is-valid'));
   }
}

export default BaseForm;
