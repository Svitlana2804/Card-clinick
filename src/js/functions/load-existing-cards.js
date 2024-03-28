
export async function loadExistingCards(token) {
   try {
      const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      });

      if (!response.ok) {
         throw new Error('Помилка при завантаженні всіх карток з серверу');
      }

      return await response.json();
   } catch (e) {
      console.log('Помилка: ', e);
   }
}
