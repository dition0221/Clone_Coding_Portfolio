const API_KEY = "9ee479b59aa1b2d07f8f9e624c3e68e6";

function onGeoOk(position) {
    const lat = position.coords.latitude;  // 위도
    const lng = position.coords.longitude;  // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);