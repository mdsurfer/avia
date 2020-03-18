const searchForm = document.querySelector('.form-search'),
   inputCitiesFrom = document.querySelector('.input__cities-from'),
   dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
   inputCitiesTo = document.querySelector('.input__cities-to'),
   dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
   inputDateDepart = document.querySelector('.input__date-depart');

console.log(inputCitiesFrom);

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', 'Омск', 'Самара', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград'];

const showCity = (input, list) => {
   dropdownCitiesFrom.textContent = '';

   if (input.value !== '') {

      const filterCity = cities.filter((item) => {
         const fixItem = item.toLowerCase();
         return item.includes(input.value.toLowerCase());
      });

      filterCity.forEach((item) => {

         const listItem = document.createElement('li');
         listItem.classList.add('dropdown__city');
         listItem.textContent = item;
         list.append(listItem);
         console.log(listItem);
      });

   }

}

const selectCity = (event, input, list) => {
   const target = event.target;
   if (target.tagName === 'LI') {
      console.log(target.textContent);
      input.value = target.textContent; //inputCities
      list.textContent = ''; //dropdownCities

   }
}
   
inputCitiesFrom.addEventListener('input', () => {
   showCity(inputCitiesFrom, dropdownCitiesFrom)
});


dropdownCitiesFrom.addEventListener('click', () => {
   //console.log(event);
   selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
   
});

dropdownCitiesTo.addEventListener('click', () => {
   //console.log(event);
   selectCity(event, inputCitiesTo, dropdownCitiesTo);

});

// dropdownCitiesFrom.addEventListener('click', (event) => {
//    //console.log(event);
//    const target = event.target;
//    if (target.tagName === 'LI') {
//       console.log(target.textContent);
//       inputCitiesFrom.value = target.textContent;
//       dropdownCitiesFrom.textContent = '';

//    }
   
// });

// dropdownCitiesTo.addEventListener('click', (event) => {
//    //console.log(event);
//    const target = event.target;
//    if (target.tagName === 'LI') {
//       console.log(target.textContent);
//       inputCitiesTo.value = target.textContent;
//       dropdownCitiesTo.textContent = '';

//    }

// });

inputCitiesTo.addEventListener('input', () => {
   showCity(inputCitiesTo, dropdownCitiesTo)
});


