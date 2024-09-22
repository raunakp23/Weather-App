let inputbox = document.querySelector('.input-box');
let searchbtn = document.querySelector('#searchbtn');
let weather_img = document.querySelector('.weather-img');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.querySelector('#humidity');
let wind_speed = document.querySelector("#wind-speed");
let location_error = document.querySelector(".location-error");
let weather_body = document.querySelector(".weather-body");

async function checkweather (city){
    let api_key = "96387067e6677ce8fa90c9364d1d6f2c";
    let base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${base_url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_error.style.display ="flex";
        weather_body.style.display ="none";
        // console.log("error");
        return;
    }

    location_error.style.display ="none";
    weather_body.style.display ="flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;

    description.innerHTML =`${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch(weather_data[0].main){
        case "Clouds":
            weather_img.src = "images/cloud.png";
            break;
        case "Clear":
            weather_img.src = "images/clear.png";
            break;
        case "Rain":
            weather_img.src = "images/rain.png";
            break;
        case "Snow":
            weather_img.src = "images/snow.png";
            break;
        case "Mist":
            weather_img.src = "images/mist.png";
            break;
    }
}

searchbtn.addEventListener("click", function(){
    checkweather(inputbox.value); 
    // input = inputbox.city;
    // console.log(inputbox.city)
});