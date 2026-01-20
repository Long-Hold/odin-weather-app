const currentWeatherCard = document.querySelector('.current-data-card');

/**
 * Updates the DOM element that represents current weather data with information
 * from the current weather object.
 * @param {Object} weatherData 
 */
export function displayCurrentWeatherData(weatherData) {
    const address = currentWeatherCard.querySelector('.address');
    const description = currentWeatherCard.querySelector('.description');
    const currentTime = currentWeatherCard.querySelector('.current-time');
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

    address.textContent = weatherData.address;
    description.textContent = weatherData.description;
    // TODO: Fetch the corresponding icon here

    const current = weatherData.current;
    currentTime.textContent = current.datetime;
    temperature.textContent = current.temp;
    conditions.textContent = current.conditions;
    humidity.textContent = current.humidity;

    precip.textContent = current.precip;
    precipProb.textContent = current.precpProb;
    precipType.textContent = current.precipType;
    snow.textContent = current.snow;

    sunrise.textContent = current.sunrise;
    sunset.textContent = current.sunset;

    windSpeed.textContent = current.windSpeed;
    windDirection.textContent = current.windDirection;
    windGust.textContent = current.windGust;
}

/**
 * Updates the micro-cards with data of future forecasts.
 * @param {Object} weatherData - An object containing an array of objects, each object contains
 * forecast data from that day.
 */
export function displayForecastedData(weatherData) {

}