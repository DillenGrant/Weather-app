const apiKey = "2c48023ff32014febde54e6be23396d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&units=imperial";

const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

async function getWeatherData() {
    try{
        const response = await fetch(apiUrl + `&appid=${apiKey}` );
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
        // Fetch current weather data
        const currentWeatherData = await getWeatherData(cityName);

        if (currentWeatherData) {
          document.querySelector()
        }
    }
});

// Event listener for clicking on a city in the search history
searchHistory.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const cityName = e.target.textContent;
        
        // Fetch and display weather data for the selected city (similar to the form submission)
    }
});