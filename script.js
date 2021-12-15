var todaysDate = moment().format("[Today], ddd MM/DD/YYYY").toString();
// console.log(todaysDate);
document.getElementById("currentDay").innerHTML = todaysDate;

var searchCityFormEl = document.querySelector("#search-form");
var citySelectEl =  document.querySelector("#select-city-btn");
var cityInputEl = document.querySelector("#city");
var cityDisplayEl = document.querySelector("#forecast-display");
var citySearch = document.querySelector("#city-search");

// * STILL SLOWLY ADDING JAVASCRIPT - UNABLE TO GET DATA TO CONSOLE.LOG(); STILL HAVE TO WORK ON CSS FOR 5 DAY FORECAST CARDS *

// var austinData = "http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(austinData);
// console.log(austinData);
// var elPasoData = "http://api.openweathermap.org/data/2.5/forecast?q=El-Paso&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(elPasoData);
// console.log(elPasoData);
// var dallasData = "http://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(dallasData);
// console.log(dallasData);
// var houstonData = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(houstonData);
// console.log(houstonData);
// var alamogordoData = "http://api.openweathermap.org/data/2.5/forecast?q=Alamogordo&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(alamogordoData);
// console.log(alamogordoData);
// var denverData = "http://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(denverData);
// console.log(denverData);
// var monroeData = "http://api.openweathermap.org/data/2.5/forecast?q=Monroe&appid=1f26c6c5c0847e359a210e9156b5d503";
// fetch(monroeData);
// console.log(monroeData);

var cityAustin = {
    lat: "30.2672",
    lon: "-97.7431"
}

// API TO GET WEATHER FORECAST
var getCityForecast = function(cities) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=alerts&appid=1f26c6c5c0847e359a210e9156b5d503";
    // MAKE REQUEST
    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                displayCityForecast(data, cities);
            });
        } else {
            alert("City Not Found");
        }
    })
    .catch(function(error) {
        alert("Unable to connect");
    })
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityForecast(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid city.");
    }
}


// var displayCityForecast = function(weather, searchCity) {
    
//     for (var i = 0; i < weather.length; i++) {
//         var cityForcast = weather[i].
//     }
// }

var buttonClickHandler = function(event) {
    var selectCity = event.target.getAttribute("data-city");
    // console.log(selectCity);

    if (cities) {
        
    }
}

searchCityFormEl.addEventListener("submit", formSubmitHandler);
citySelectEl.addEventListener("click", buttonClickHandler);