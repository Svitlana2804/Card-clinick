import createTost from '../components/toast.js';

export async function editCard(id, newResponseBody='') {
   const token = localStorage.getItem("token");
   try {
      const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(newResponseBody),
      });
      if (!response.ok) {
         createTost('Сталася помилка! Візит НЕ змінено, перезавантажте сторінку!', 'text-danger', 'text-success');
         throw new Error('Помилка при зміні даних візиту');
      }
      createTost('Дані візиту оновлено', 'text-success', 'text-danger');
   } catch (e) {
      console.log('Помилка: ', e);
   }
}
