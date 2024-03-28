let startWorking = 8;
const endWorking = 20;
const doctorBtnWrapper = document.querySelector('.doctorBtnWrapper');
const selectDoctor = document.querySelector('.js-doctor');
const doctorSelect = document.querySelector('.chooseDoctorSelect');
const regNumbOnly = /^[0-9.,]{1,}$/;
const regTextNumbers = /^[a-zA-Zа-яА-Я0-9ієїІЄЇ'".,\\ -]{2,}$/;
const  displayNoCards = document.querySelector('.noCards');
const btnToggleText = document.querySelector('.btnToggleText');

const cardContainer = document.getElementById("cardContainer");

export{startWorking, endWorking, doctorBtnWrapper, btnToggleText, selectDoctor, regNumbOnly, regTextNumbers, cardContainer, doctorSelect, displayNoCards};