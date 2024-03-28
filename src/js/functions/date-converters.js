// Tue Month dd yyyy hh:mm:ss GMT+0200 (time zone)   =>   dd.mm.yyyy
export function simplifyDateToString(date) {
   return (
      ('0' + date.getDate()).slice(-2) +
      '.' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '.' +
      date.getFullYear().toString().slice(-2) +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
   );
}

// 2023-10-07T00:00:00.000Z   =>   07.10.2023
export function changeDateRecord(date1) {
   const date = new Date(date1);

   var day = date.getUTCDate();
   var month = date.getUTCMonth() + 1;
   var year = date.getUTCFullYear();

   return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
}

//   YYYY-MM-DD and 13:00   =>   Tue Month dd yyyy hh:mm:ss GMT+0200 (time zone)
export function convertToDateFormat(date, time = '00:00') {
   const [year, month, day] = date.split('-');
   const [hours, minutes] = time.split(':');

   return new Date(year, month - 1, day, hours, minutes);
}

export function formatDateTime(obj) {
   const dateObject = new Date(obj);
   const day = dateObject.getDate();
   const month = dateObject.getMonth() + 1; // Місяці починаються з 0
   const year = dateObject.getFullYear();
   const hours = dateObject.getHours();
   const minutes = dateObject.getMinutes();

   const formattedDay = day < 10 ? `0${day}` : day;
   const formattedMonth = month < 10 ? `0${month}` : month;
   const formattedHours = hours < 10 ? `0${hours}` : hours;
   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

   return `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}`;
}
