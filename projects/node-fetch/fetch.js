import fetch from 'node-fetch';

// fetch returns a promise
// fetching is asynchronous and can take a while // so await the reponse
// Text/Html example
const fetchHTML = await fetch('https://www.google.com');
const responseHTML = await fetchHTML;
const text = await responseHTML.text();
console.log(text, '\n\n');
// if you don't await something that returns a promise
// those promises will not be resolved
// Console.log output: Promise { <pending> }

// JSON example
const fetchJSON = await fetch('https://api.punkapi.com/v2/beers');
const responseJSON = await fetchJSON;
const json = await responseJSON.json();
console.log(json[0], '\n\n');

// Another shorter JSON example
const fetchDogs = await fetch('https://dog.ceo/api/breeds/image/random');
console.log(await fetchDogs.json(), '\n\n');
