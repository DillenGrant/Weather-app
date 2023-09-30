const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

// Event listener for form submission
cityForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const cityName = cityInput.value.trim();
    // Use an API (e.g., OpenWeatherMap) to fetch weather data for the city
    // Display current and future weather conditions
    // Add the city to the search history
});

// Event listener for clicking on a city in the search history
searchHistory.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const cityName = e.target.textContent;
        // Use the selected city name to fetch and display weather data
    }
});