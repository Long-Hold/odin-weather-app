import {
  formatTo12Hour,
  degreesToCardinal,
  titlecaseAddress,
  addCelciusSymbols,
  addPercentageSymbol,
  addKilometerSymbol,
  addMilimeterSymbol,
  convertDateToShorthand,
} from "../utils/dataFormatUtils";

export function parseWeatherJson(weatherData) {
  const currentConditions = stringifyValues({
    ...weatherData.currentConditions,
    address: weatherData.resolvedAddress,
  });

  const forecastConditions = weatherData.days
    .slice(1)
    .map((day) => stringifyValues(day));
  return {
    current: extractCurrentConditions(currentConditions),
    forecasted: extractForecastedConditions(forecastConditions),
  };
}

function extractCurrentConditions(current) {
  return {
    address: titlecaseAddress(current.address),
    conditions: current.conditions,
    dateTime: formatTo12Hour(current.datetime),
    feelsLike: addCelciusSymbols(current.feelslike),
    humidity: addPercentageSymbol(current.humidity),
    icon: current.icon,
    precip: addMilimeterSymbol(current.precip),
    precipProb: addPercentageSymbol(current.precipprob),
    precipType: current.preciptype,
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
    date: convertDateToShorthand(day.datetime),
    icon: day.icon,
    precip: addMilimeterSymbol(day.precip),
    precipProb: addPercentageSymbol(day.precipprob),
    precipType: day.preciptype,
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
