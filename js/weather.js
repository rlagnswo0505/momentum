const API_KEY = "615afdc6890061326d688c02af8bab1c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // units=metric 화씨온도를 섭씨온도로 변환
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerHTML = data.name;
    weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);