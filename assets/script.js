const apiKey = '2c48023ff32014febde54e6be23396d0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial'

const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

async function getWeatherData(cityName) {
    try {
        const response = await fetch(apiUrl + '?q=${cityName}&appid=${apiKey}&units=imperial');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

cityForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const cityName = cityInput.value.trim();
    if (cityName) {
        const currentWeatherData = await getWeatherData(cityName);
        if (currentWeatherData) {
    // Use an API (e.g., OpenWeatherMap) to fetch weather data for the city
    // Display current and future weather conditions
          // Add the city to the search history
        }
    }

    
});

searchHistory.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const cityName = e.target.textContent;
    }
    fetch
});