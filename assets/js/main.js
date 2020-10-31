import {print} from './helper.js'
import {getData} from './data.js';

export function createUI(countries){
    let container = document.querySelector('body');
    let countryContainer = document.createElement('div');
    countryContainer.setAttribute('class', 'container country-contain');
    let countryRow = document.createElement('div');
    countryRow.setAttribute('class', 'row');
    countryContainer.innerHTML = '';
    countries.forEach(country => {
   let countryCol = document.createElement('div');
   countryCol.setAttribute('class', 'col-md-3');
   let card = document.createElement('div');
   card.setAttribute('class', 'card  m-2');
   let cardImg = document.createElement('img');
   cardImg.setAttribute('class', 'card-img-top');
   cardImg.src = `${country.flag}`
   let cardBody = document.createElement('div');
   cardBody.setAttribute('class', 'card-body');
   let cardTitle = document.createElement('h5');
   cardTitle.setAttribute('class', 'card-title');
   cardTitle.innerText = `${country.name}`;
   let population = document.createElement('p');
   population.innerHTML = `<span class = "font-weight-bold">Population:</span> ${country.population}`;
   let region = document.createElement('p');
   region.innerHTML = `<span class = "font-weight-bold">Region:</span> ${country.region}`;
   let capital = document.createElement('p');
   capital.innerHTML = `<span class = "font-weight-bold">Capital:</span> ${country.capital}`;
   card.append(cardImg, cardBody, cardTitle, population, region, capital);
   countryCol.append(card);
   countryRow.appendChild(countryCol);
   countryContainer.append(countryRow);
   container.append(countryContainer);
   })
};
export function ByInput(countries){
let userInput = document.querySelector('#userInput');
userInput.addEventListener('keypress', (e) => {
    console.log(e.target.value)
    if(e.target.value != ''){
        let data = countries.filter(country => country.name.includes(e.target.value));
        createUI(data);
     }
})
}
getData();

