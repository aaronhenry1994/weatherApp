const form = document.getElementById('form');
const box = document.getElementById('weatherBox');

const city = document.getElementById('city');
let tempP = document.createElement('p');
tempP.className = 'tempText';
let hum = document.getElementById('humText');
let wind = document.getElementById('windText');
let weatherIcon = document.getElementById('icon');

function createInstance (cityValue) {
    const city = cityValue;

    return { city }
};

const call = 'http://api.weatherapi.com/v1/current.json?'
const and = '&';
const apiKey = 'key=fdeffae15e40475fb5111617242601';
const q = 'q=';

async function getWeather(location) {
    fetch(call + apiKey + and + q + location, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.current.temp_f);
        weatherIcon.src = response.current.condition.icon;
        tempP.textContent = response.current.
        temp_f + '° F';
        hum.textContent = 'Humidity:' + ' ' + response.current.humidity; + '%';
        wind.textContent = 'Windspeed is ' + response.current.wind_mph + '' + 'mph';
    })
    .catch(function(err) {
        err = 'No internet.';
        tempP.textContent = err;
        hum.textContent = err;
        wind.textContent = err;
    });
};

let newDiv = document.createElement('div');
let cityP = document.createElement('p');
cityP.className = 'cityText';
let stateP = document.createElement('p');
let countryP = document.createElement('p');

let buttton = document.querySelector('button');
buttton.addEventListener('click', () => {
    event.preventDefault();
    console.log(city.value);
    getWeather(city.value);

    let currentWeather = createInstance(city.value);

    console.log(currentWeather);

    console.log(getWeather(location));
    tempP.textContent = getWeather(location);

    cityP.textContent = currentWeather.city;
    stateP.textContent = currentWeather.state;
    countryP.textContent = currentWeather.country;

    box.appendChild(newDiv);
    newDiv.appendChild(cityP);
    newDiv.appendChild(tempP);
});