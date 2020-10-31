import {createUI, ByInput} from './main.js'
let url = 'https://restcountries.eu/rest/v2/all'

export let getData = async () => {
  let  data = await fetch(url);
   let jsonData = await data.json();
   console.log(jsonData)
   createUI(jsonData);
   ByInput(jsonData);
   let asian = jsonData.filter(data => data.region == "Asia");
   let africa = jsonData.filter(data => data.region == "Africa");
   let europe = jsonData.filter(data => data.region == "Europe");
   let  oceania = jsonData.filter(data => data.region == "Oceania");
   let americas = jsonData.filter(data => data.region == "Americas");
}