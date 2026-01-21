const currentWeatherCard = document.querySelector('.current-data-card');
const forecastCardTemplate = document.getElementById('forecast-card-template');

/**
 * Updates the DOM element that represents current weather data with information
 * from the current weather object.
 * @param {Object} weatherData - An object containing weather data from the Visual Crossing API.
 */
export function displayCurrentWeatherData(weatherData) {
    /**These values are not in the nested 'current' object,
     * so they are queried and set manually
     */
    const address = currentWeatherCard.querySelector('.address');
    const description = currentWeatherCard.querySelector('.description');
    address.textContent = weatherData.address;
    description.textContent = weatherData.description
    //TODO: Set Icon

    const current = weatherData.current;
    for (const [key, value] of Object.entries(current)) {
        const element = currentWeatherCard.querySelector(`[data-forecast="${key}"]`);
        if (element) element.textContent = value;
        else console.error(`Element for current weather ${key} not found.`);
    }
}

/**
 * Updates the micro-cards with data of future forecasts.
 * @param {Object} weatherData - An object containing an array of objects, each object contains
 * forecast data from that day.
 */
export function displayForecastedData(weatherData) {
    weatherData.forEach((day) => {
        const forecastCardClone = forecastCardTemplate.content.cloneNode(true);
        const article = forecastCardClone.querySelector('.forecast-data-card');

        const time = article.querySelector('time');
        //TODO: Fetch icon

        const temperature = article.querySelector('.temperature');
        const feelsLike = article.querySelector('.feels-like');
        const precipType = article.querySelector('.precip-type');
        const precipProb = article.querySelector('.precip-prob');
        const precip = article.querySelector('.precip');
        const snow = article.querySelector('.snow');

        time.setAttribute('datetime', day.date);
        time.textContent = day.date;

        document.querySelector('.forecast-cards-display').appendChild(article);
    });
}