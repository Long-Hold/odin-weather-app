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
    addWeatherDataTextContent(current, currentWeatherCard);
}

/**
 * Updates the micro-cards with data of future forecasts.
 * @param {Object} weatherData - An object containing an array of objects, each object contains
 * forecast data from that day.
 */
export function displayForecastedData(weatherData) {
    const forecastCardsDisplay = document.querySelector('.forecast-cards-display');
    forecastCardsDisplay.replaceChildren();
    
    weatherData.forEach((day) => {
        const forecastCardClone = forecastCardTemplate.content.cloneNode(true);
        const article = forecastCardClone.querySelector('.forecast-data-card');

        addWeatherDataTextContent(day, article);
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
function addWeatherDataTextContent(weatherData, parentContainerElement) {
    for (const [key, value] of Object.entries(weatherData)) {
        const element = parentContainerElement.querySelector(`[data-forecast="${key}"]`);

        if (!element) {
            console.error(`The corresponding element for ${key} could not be found.`);
            continue;
        }

        if (element instanceof HTMLTimeElement) element.setAttribute('datetime', value);
        element.textContent = value;
    }

    return parentContainerElement;
}