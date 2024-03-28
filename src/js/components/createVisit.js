import BaseForm from '../classes/baseForm.js';
import CardiologistForm from '../classes/cardiologistForm.js';
import DentistForm from '../classes/dentistForm.js';
import TherapistForm from '../classes/therapistForm.js';
import { doctorBtnWrapper, selectDoctor } from '../variables.js';
import activatePopover from '../components/activatePopover.js';
import openModal from '../components/openModal.js';
import {drugDropForm, toggle, changeDoctor} from './drugDropForm.js';

const jsContentModal = document.querySelector('.js-contentModal');
const baseFormInstance = new BaseForm();
let timeVisitChangeHandler;
let dateVisitElement;

drugDropForm();

// Вибір лікаря по селекту
selectDoctor.addEventListener('change', function () {
   createForm(selectDoctor.value);
   !toggle && changeDoctor();
});

// Вибір лікаря по кліку
doctorBtnWrapper.addEventListener('click', function (e) {
   e.preventDefault();
   if (e.target.nodeName === 'DIV') {
      return;
   }
   openModal('.modalVisit');
   !toggle && changeDoctor();
   const clickDoctorValue = e.target.tagName !== 'IMG' ? e.target.innerText : e.target.parentElement.innerText;
   const doctorMap = {
      КАРДІОЛОГ: 'cardiologist',
      СТОМАТОЛОГ: 'dentist',
      ТЕРАПЕВТ: 'therapist',
   };
   createForm(doctorMap[clickDoctorValue]);
});

export function createForm(chooseDoctorValue, dataObj) {
   jsContentModal.textContent = '';
   switch (chooseDoctorValue) {
      case 'cardiologist':
         jsContentModal.appendChild(new CardiologistForm(dataObj).createDoctorForm());
         activatePopover('countImt');
         dateVisitElement = document.getElementById('date');
         createNewTime('Кардіолог');
         break;
      case 'dentist':
         jsContentModal.appendChild(new DentistForm(dataObj).createDoctorForm());
         dateVisitElement = document.getElementById('date');
         createNewTime('Стоматолог');
         break;
      case 'therapist':
         jsContentModal.appendChild(new TherapistForm(dataObj).createDoctorForm());
         dateVisitElement = document.getElementById('date');
         createNewTime('Терапевт');
         break;
   }
   dateVisitElement.addEventListener('change', (e) => {
      baseFormInstance.checkForToday(e);
      document.getElementById('timeVisit').innerHTML = baseFormInstance.createAppointmentHours();
   });
}

function createNewTime(doctor) {
   dateVisitElement.removeEventListener('change', timeVisitChangeHandler);
   timeVisitChangeHandler = async e => {
      try {
         const timeOptions = await baseFormInstance.newTime(doctor, e.target.value);
         const optionsTimeElement = document.getElementById('timeVisit');
         optionsTimeElement.innerHTML = timeOptions;
      } catch (error) {
         console.error('Помилка при оновленні часу візиту:', error);
      }
   };
   dateVisitElement.addEventListener('change', timeVisitChangeHandler);
}
