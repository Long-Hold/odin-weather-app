const currentWeatherCard = document.querySelector('.current-data-card');

/**
 * Updates the DOM element that represents current weather data with information
 * from the current weather object.
 * @param {Object} currentWeatherData 
 */
export function displayCurrentWeatherData(currentWeatherData) {
    const address = currentWeatherCard.querySelector('.address');
    const description = currentWeatherCard.querySelector('.description');
    const icon = currentWeatherCard.querySelector('img');
    
    const temperature = currentWeatherCard.querySelector('.temperature');
    const conditions = currentWeatherCard.querySelector('.conditions');
    const humidity = currentWeatherCard.querySelector('.humidity');

    const precip = currentWeatherCard.querySelector('.precip');
    const precipProb = currentWeatherCard.querySelector('.precip-prob');
    const precipType = currentWeatherCard.querySelector('.precip-type');
    const snow = currentWeatherCard.querySelector('.snow');

    const sunrise = currentWeatherCard.querySelector('.sunrise');
    const sunset = currentWeatherCard.querySelector('.sunset');

    const windSpeed = currentWeatherCard.querySelector('.wind-speed');
    const windDirection = currentWeatherCard.querySelector('.wind-direction');
    const windGust = currentWeatherCard.querySelector('.wind-gust');
}