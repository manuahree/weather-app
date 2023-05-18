const apiKey = '82dfce36194f8b6cdc2af62c7001b30f';
const assignedCity = 'Luton';

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const updateWeather = (data) => {
  city.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weather.textContent = data.weather[0].description;
  wind.textContent = `Wind: ${data.wind.speed}m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
};

const getWeatherData = async (query) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error(error);
    alert('Error fetching weather data. Please try again later.');
  }
};

searchBtn.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) {
    getWeatherData(query);
    searchInput.value = '';
  } else {
    alert('Please enter a city name.');
  }
});

getWeatherData('Luton');