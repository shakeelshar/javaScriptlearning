
// import { countryList } from './code.js';



// const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

// const dropdowns=document.querySelectorAll(".dropdown select");

// for(code in countryList){

//     console.log(code)
// }


// Assuming countryList is exported from another file named 'countries.js'
import { countryList } from './countries.js';

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

// Fetch data from the URL
fetch(BASE_URL)
  .then(response => response.json()) // Parse response as JSON
  .then(data => {
    // Assuming `data` contains the fetched JSON
    // Iterate over the data
    for (const code in data) {
      // Check if code exists in countryList
      if (countryList[code]) {
        console.log(countryList[code]);
      }
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
