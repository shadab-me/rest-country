
import {
    getData
} from './data.js';
export let userInput = document.querySelector('#userInput');
let select = document.querySelector('#select');

export function ByInput(countries) {
    userInput.addEventListener('keypress', (e) => {
        console.log(e.target.value)
        if (e.target.value != '') {
            let data = countries.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(data)
            createUI(data);
        }
    })
}
export function byRegion(jsonData) {
    let asian = jsonData.filter(data => data.region == "Asia");
    let africa = jsonData.filter(data => data.region == "Africa");
    let europe = jsonData.filter(data => data.region == "Europe");
    let oceania = jsonData.filter(data => data.region == "Oceania");
    let americas = jsonData.filter(data => data.region == "Americas");
    select.addEventListener('change', (e) => {
        if (e.target.value == 'all') {
            createUI(jsonData);
        }
        if (e.target.value == 'asian') {
            createUI(asian);
        }
        if (e.target.value == 'africa') {
            createUI(africa);
        }
        if (e.target.value == 'europe') {
            createUI(europe);
        }
        if (e.target.value == 'oceania') {
            createUI(oceania);
        }
        if (e.target.value == 'americas') {
            createUI(americas);
        }

    })
}
export function createUI(countries) {
    let container = document.querySelector('#countries');
    container.innerHTML = '';
    let countryContainer = document.createElement('div');
    countryContainer.setAttribute('class', 'container country-contain');
    let countryRow = document.createElement('div');
    countryRow.setAttribute('class', 'row');
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
        card.setAttribute('data-name', `${country.name}`)
        let population = document.createElement('p');
        population.innerHTML = `<span class = "font-weight-bold">Population:</span> ${country.population}`;
        let region = document.createElement('p');
        region.innerHTML = `<span class = "font-weight-bold">Region:</span> ${country.region}`;
        let capital = document.createElement('p');
        capital.innerHTML = `<span class = "font-weight-bold">Capital:</span> ${country.capital}`;
        card.append(cardImg, cardBody, cardTitle, population, region, capital);
        card.addEventListener('click', (e) => console.log(e.target))
        countryCol.append(card);
        countryRow.appendChild(countryCol);
        countryContainer.append(countryRow);
        container.append(countryContainer);
    })
};


getData();