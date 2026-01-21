import { formatTo12Hour, degreesToCardinal, titlecaseAddress, addCelciusSymbols, addPercentageSymbol, addKilometerSymbol, addCentimeterSymbol } from "../utils/dataFormatUtils";

export function parseWeatherJson(weatherData) {
  const currentConditions = stringifyValues(weatherData.currentConditions);
  const forecastConditions = weatherData.days.map(day => stringifyValues(day));
  return {
    address: titlecaseAddress(weatherData.address),
    description: weatherData.description,
    current: extractCurrentConditions(currentConditions),
    forecasted: extractForecastedConditions(forecastConditions),
  };
}

function extractCurrentConditions(current) {
  return {
    conditions: current.conditions,
    dateTime: formatTo12Hour(current.datetime),
    feelsLike: addCelciusSymbols(current.feelslike),
    humidity: addPercentageSymbol(current.humidity),
    icon: current.icon,
    precip: addCentimeterSymbol(current.precip),
    precipProb: addPercentageSymbol(current.precipprob),
    precipType: current.preciptype,
    snow: addCentimeterSymbol(current.snow),
    sunrise: formatTo12Hour(current.sunrise),
    sunset: formatTo12Hour(current.sunset),
    temp: addCelciusSymbols(current.temp),
    windDirection: degreesToCardinal(current.winddir),
    windGust: addKilometerSymbol(current.windgust),
    windSpeed: addKilometerSymbol(current.windspeed),
  };
}

function extractForecastedConditions(days) {
  return days.map((day) => ({
    date: day.datetime,
    feelsLike: addCelciusSymbols(day.feelslike),
    humidity: addPercentageSymbol(day.humidity),
    icon: day.icon,
    precip: addCentimeterSymbol(day.precip),
    precipProb: addPercentageSymbol(day.precipprob),
    precipType: day.preciptype,
    snow: addCentimeterSymbol(day.snow),
    temp: addCelciusSymbols(day.temp),
  }));
}

/**
 * Converts and trims all object properties into strings.
 * @param {Object} object - An object storing weather data.
 * @returns {Object} An object with all string values
 */
function stringifyValues(object) {
  const results = {};
  for (const [key, value] of Object.entries(object)) {
    results[key] = `${value}`.trim();
  }

  return results;
}
