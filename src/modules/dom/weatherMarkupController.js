import { getWeatherIcon, getDataThumbnail } from "./weatherIconManager";

/**
 * Updates the DOM element that represents current weather data with information
 * from the current weather object.
 * @param {Object} weatherData - An object containing weather data from the Visual Crossing API.
 */
export function displayCurrentWeatherData(weatherData) {
    const currentCardTemplate = document.getElementById('current-card-template');
    const currentCardClone = currentCardTemplate.content.cloneNode(true);
    const currentWeatherCard = currentCardClone.querySelector('.current-data-card');
    
    updateWeatherCards(weatherData, currentWeatherCard);
    currentWeatherCard.querySelector('.sunrise img').src = getDataThumbnail('sunrise');
    currentWeatherCard.querySelector('.sunset img').src = getDataThumbnail('sunset');

    const currentCardDisplay = document.querySelector('.current-card-display');
    currentCardDisplay.replaceChildren();
    currentCardDisplay.appendChild(currentWeatherCard);
}

/**
 * Updates the micro-cards with data of future forecasts.
 * @param {Object} weatherData - An object containing an array of objects, each object contains
 * forecast data from that day.
 */
export function displayForecastedData(weatherData) {
    const forecastCardsDisplay = document.querySelector('.forecast-cards-display');
    forecastCardsDisplay.replaceChildren();

    const forecastCardTemplate = document.getElementById('forecast-card-template');
    
    weatherData.forEach((day) => {
        const forecastCardClone = forecastCardTemplate.content.cloneNode(true);
        const article = forecastCardClone.querySelector('.forecast-data-card');

        updateWeatherCards(day, article);
        forecastCardsDisplay.appendChild(article);
    });
}

/**
 * Iterates through an objects Key, Value properties and queries a parent HTML Element
 * for child elements via the dataset attribute.
 * 
 * If the dataset value matches the Key from the object, then the elements textContent is updated
 * with that Key's Value.
 * 
 * @param {Object} weatherData - An object that stores various weather data values.
 * @param {HTMLElement} parentContainerElement - The parent container that holds the queried child
 * @returns {HTMLElement}
 */
function updateWeatherCards(weatherData, parentContainerElement) {
    for (const [key, value] of Object.entries(weatherData)) {
        const element = parentContainerElement.querySelector(`[data-forecast="${key}"]`);

        if (!element) {
            console.error(`The corresponding element for ${key} could not be found.`);
            continue;
        }

        // This only updates image elements that have the data-forecast attribute,
        // not image elements like the sunrise / sunset thumnails
        if (element instanceof HTMLImageElement) {
            const icon = getWeatherIcon(value);
            element.src = icon;
            continue;
        }

        if (element instanceof HTMLTimeElement) element.setAttribute('datetime', value);
        element.textContent = value;
    }

    return parentContainerElement;
}