

const searchForm = document.querySelector('.form-search'),
   inputCitiesFrom = document.querySelector('.input__cities-from'),
   dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
   inputCitiesTo = document.querySelector('.input__cities-to'),
   dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
   inputDateDepart = document.querySelector('.input__date-depart');

let cities = [],
  originCity = "SVX",
  destinationCity = "KGD",
  departDate = "2020-05-25",
  one_way = false;



const getData = (url, callback) => {
   const request = new XMLHttpRequest();
   request.open('GET', url);
   request.addEventListener('readystatechange', () => { 
      if (request.readyState !== 4) return; 
      if (request.status === 200) {
         callback(request.response);
      } else {
         console.error(request.status);
      }
   });
   request.send();
}
const apiCityList = 'data/cities.json',
   proxy = 'https://cors-anywhere.herokuapp.com/',
   API_KEY = 'aa4b1c9709b896e36bbafde12dada32f',
   API_CAL = 'http://min-prices.aviasales.ru/calendar_preload';
   
const showCity = (input, list) => {
   list.textContent = '';


   if (input.value !== '') {
      const filterCity = cities.filter((item) => {
            const fixItem = item.name.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
      });

      filterCity.forEach((item) => {
         const listItem = document.createElement('li');
         listItem.classList.add('dropdown__city');
         listItem.textContent = item.name;
         list.append(listItem);
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

inputCitiesTo.addEventListener('input', () => {
   showCity(inputCitiesTo, dropdownCitiesTo)
});

getData(apiCityList, (data) => {
   
   cities = JSON.parse(data).filter(item => item.name);
   console.log(cities);
});

getData('http://min-prices.aviasales.ru/calendar_preload?origin=' + originCity + '&destination=' + destinationCity + '&depart_date=' + departDate + '&one_way=' + one_way,
  data => {
     const flightData = JSON.parse(data);
     
     
    console.log(flightData);
    return true;
  }
);