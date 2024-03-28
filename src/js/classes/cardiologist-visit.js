import { Visit } from './visit';
import cardiologyImg from '../../img/cardiology-or.png';
import { changeDateRecord } from './../functions/date-converters.js';
import openModal from '../components/openModal.js';
import {createForm} from '../components/createVisit.js';
import {formatDateTime} from '../functions/date-converters';
export class CardiologistVisit extends Visit {
   constructor({
      date,
      id,
      status,
      timeVisit,
      fullName,
      target,
      urgency,
      description,
      pressureLower,
      pressureHigh,
      age,
      pressure,
      indexBM,
      disease,
      editDate,
   } = {}) {
      super(date, id, status, timeVisit, fullName, target, urgency, description, editDate);
      this.doctor = 'Кардіолог';
      this.age = age;
      this.pressure = pressure;
      this.indexBM = indexBM;
      this.disease = disease;
      this.doctorImgUrl = cardiologyImg;
      this.pressureLower = pressureLower;
      this.pressureHigh = pressureHigh;
    }

   createResponseBody() {
      return {
         doctor: this.doctor,
         status: this.status,
         date: this.date,
         timeVisit: this.timeVisit,
         fullName: this.fullName,
         target: this.target,
         urgency: this.urgency,
         description: this.description,
         age: this.age,
         pressure: this.pressure,
         indexBM: this.indexBM,
         disease: this.disease,
         editDate: this.editDate,
         editTime: this.editTime,
      };
   }

   generateCardHtml() {
      let editDateString = this.editDate ? `Оновлено: ${formatDateTime(this.editDate)}` : '';

      let expandClass = '';
      let expandBtnText = 'Показати більше ⯆';
      if (this.isExpand) {
         expandClass = 'card__expand-collapse-container--show';
         expandBtnText = 'Показати менше ⯅';
      }
      let urgencyText = '';
      let higthUgencyBage = '';
      switch (this.urgency) {
         case 'urgent':
            urgencyText = "<span style='color: #DC3545;'>висока</span>";
            higthUgencyBage = `<span class="badge bg-danger">!</span>`;

            break;
         case 'priority':
            urgencyText = 'пріоритетна';

            break;
         case 'common':
            urgencyText = 'нормальна';

            break;
      }

      let containerStatus = '';
      let selectOpen = '';
      let selectDone = '';

      if (this.status) {
         selectOpen = 'selected';
      } else {
         containerStatus = 'card__container--done';
         selectDone = 'selected';
      }

      let disabled = '';
      if (this.isDateHadPassed) {
         disabled = 'disabled';
      }

      return `
        <div draggable="true" class="card__container ${containerStatus}">
        <div class="card__head">
          <img src="${this.doctorImgUrl}" alt="Doctor type image" class="card__img">
          <div class="card__head__info">
            <h3 class="card__doctor-type">${this.doctor} ${higthUgencyBage}</h3>
            <h5 class="card__date">${changeDateRecord(this.date)} ${this.timeVisit}</h5>
          </div>
          <button type="button" class="card__btn-close btn-close" aria-label="Close"></button>
        </div>
        <h4 class="card__full-name">${this.fullName}</h4>
        <div class="card__expand-collapse-container ${expandClass}">
          <p class="card__text"><span class="card__text-title">Мета візиту: </span>${
             this.target
          }</p>
          <p class="card__text"><span class="card__text-title">Терміновість: </span>${urgencyText}</p>
          <p class="card__text"><span class="card__text-title">Звичайний тиск: </span>${
             this.pressureLower
          } / ${this.pressureHigh}</p>
          <p class="card__text"><span class="card__text-title">ІМТ: </span>${this.indexBM}</p>
          <p class="card__text"><span class="card__text-title">Вік: </span>${this.age}</p>
          <p class="card__text"><span class="card__text-title">Перенесені захворювання: </span>${
             this.disease
          }</p>
          <p class="card__text"><span class="card__text-title">Опис: </span>${this.description}</p>
          <p class="card__edit-time">${editDateString}</p>
          <select ${disabled} class="card__status-selector form-select col-12" aria-label="Default select">
            <option ${selectOpen} value="open">Активний</option>
            <option ${selectDone} value="done">Завершений</option>
          </select>
        </div>
        <div class="card__bottom">
          <button type="button" class="btn btn-secondary card__expand-collapse-btn">${expandBtnText}</button>
          <button ${disabled} type="button" class="btn btn-secondary card__edit-btn">Змінити</button>
        </div>
      </div>`;
   }

   async editedResponseBody() {
      openModal('.modalVisit');
      createForm('cardiologist', this);
      this.rewriteEditDate();

      return this.createResponseBody();
   }
}
