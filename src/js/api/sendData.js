import createTost from '../components/toast.js';

export async function sendData(dataForCard) {
   const token = localStorage.getItem('token')
   try {
      const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(dataForCard),
      });

      if (!response.ok) {
         createTost('Сталася помилка! Візит НЕ створено, перезавантажте сторінку!', 'text-danger', 'text-success');
      }
      createTost('Новий візит успішно створено!', 'text-success', 'text-danger', 'text-danger');
      return await response.json();
   } catch (err) {
      createTost('Сталася помилка! Візит НЕ створено, перезавантажте сторінку!', 'text-danger', 'text-success');
   }
}
