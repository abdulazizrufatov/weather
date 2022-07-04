const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const weatherBox = document.querySelector(".weather-box");

const renderWeather = function (info) {
  const html = `
  <h3 class="city">${info.name}</h3>
        <p class="desc-1">Country: ${info.sys.country}</p>
        <p class="desc-2">Temperature: ${info.main.temp}</p>
        <p class="desc-3">Speed: ${info.wind.speed}</p>

    `;
  weatherBox.innerHTML = null;
  weatherBox.insertAdjacentHTML("beforeend", html);
};

const callData = function (worldWeather) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${worldWeather}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
  )
    .then((ops) => ops.json())
    .then((info) => renderWeather(info));
};

elForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = elInput.value;
  elInput.value = null;
  callData(inputValue);
});

let $ = function (selector, a = document) {
  return a.querySelector(selector);
};

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
