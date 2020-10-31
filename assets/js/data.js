import {createUI, userInput, byRegion} from './main.js';
import {ByInput} from './helper.js'
let url = 'https://restcountries.eu/rest/v2/all';
 

/*

*/

export let getData = async () => {
  let  data = await fetch(url);
   let jsonData = await data.json();
   //console.log(jsonData)
  // createUI(jsonData);
  if(userInput){
    ByInput(jsonData);
  }
  byRegion(jsonData)
  createUI(jsonData);
   
}