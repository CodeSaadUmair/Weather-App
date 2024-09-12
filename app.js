const apiUrl = "https://weather-api99.p.rapidapi.com/weather?city=";

const ipElement = document.querySelector(".search input");
const btnElement = document.querySelector(".search button");
const weatherElement = document.querySelector(".weather-icon");
const errorElement = document.querySelector(".error");

const rapidApiKey = "4c5e674cf0msh1eab31b8ac17658p13acb1jsn257676848ed9";

checkWeather("dhule");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "weather-api99.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        showError("City not found. Please try again.");
      } else {
        showError("Unable to fetch weather data. Please try again.");
      }
      return;
    }

    const data = await response.json();
    console.log(data);
    hideError(); 

    const tempCelsius = Math.round(data.main.temp - 273.15);

    document.querySelector(".temp").innerHTML = `${tempCelsius}&deg;C`;
    document.querySelector(".ct").innerHTML = `${data.name} , ${data.sys.country}`;
    document.querySelector(".humid").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
      case "Clouds":
        weatherElement.src = "images/clouds.png";
        break;
      case "Clear":
        weatherElement.src = "images/clear.png";
        break;
      case "Rain":
        weatherElement.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherElement.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherElement.src = "images/mist.png";
        break;
      case "Snow":
        weatherElement.src = "images/snow.png";
        break;
    }
  } catch (error) {
    showError("Unable to fetch weather data. Please try again.");
  }
}

btnElement.addEventListener("click", () => {
  checkWeather(ipElement.value);
});

ipElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(ipElement.value);
  }
});

function showError(message) {
  errorElement.classList.remove("hidden");
  errorElement.classList.add("visible");
  errorElement.innerText = message;
}

function hideError() {
  errorElement.classList.remove("visible");
  errorElement.classList.add("hidden");
}
