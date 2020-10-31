import {print} from './helper.js'
import {getData} from './data.js';

getData();

export function createUI(countries){
    let container = document.querySelector('body');
    let countryContainer = document.createElement('div');
    countryContainer.setAttribute('class', 'container country-contain');
    let countryRow = document.createElement('div');
    countryRow.setAttribute('class', 'row');
    countries.forEach(country => {
   let countryCol = document.createElement('div');
   countryCol.setAttribute('class', 'col-md-3');
   let card = document.createElement('div');
   card.setAttribute('class', 'card p-3 m-2');
   let cardImg = document.createElement('img');
   cardImg.setAttribute('class', 'card-img-top');
   cardImg.src = `${country.flag}`
   let cardBody = document.createElement('div');
   cardBody.setAttribute('class', 'card-body');
   let cardTitle = document.createElement('h5');
   cardTitle.setAttribute('class', 'card-title');
   cardTitle.innerText = `${country.name}`
   card.append(cardImg, cardBody, cardTitle);
   countryCol.append(card);
   countryRow.appendChild(countryCol);
   countryContainer.append(countryRow);
   container.append(countryContainer);
   })
}


