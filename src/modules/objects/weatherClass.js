import { formatTo12Hour, degreesToCardinal, titlecaseAddress, addCelciusSymbols, addPercentageSymbol } from "../utils/dataFormatUtils";

export function parseWeatherJson(weatherData) {
  return {
    address: titlecaseAddress(weatherData.address),
    description: weatherData.description,
    current: extractCurrentConditions(weatherData.currentConditions),
    forecasted: extractForecastedConditions(weatherData.days),
  };
}

function extractCurrentConditions(current) {
  return {
    conditions: current.conditions,
    datetime: formatTo12Hour(current.datetime),
    feelslike: addCelciusSymbols(current.feelslike),
    humidity: addPercentageSymbol(current.humidity),
    icon: current.icon,
    precip: current.precip,
    precipProb: addPercentageSymbol(current.precipprob),
    precipType: current.preciptype,
    snow: current.snow,
    sunrise: formatTo12Hour(current.sunrise),
    sunset: formatTo12Hour(current.sunset),
    temp: addCelciusSymbols(current.temp),
    windDirection: degreesToCardinal(current.winddir),
    windGust: current.windgust,
    windSpeed: current.windspeed,
  };
}

function extractForecastedConditions(days) {
  return days.map((day) => ({
    conditions: day.conditions,
    date: day.datetime,
    description: day.description,
    feelsLike: addCelciusSymbols(day.feelslike),
    humidity: addPercentageSymbol(day.humidity),
    icon: day.icon,
    precip: day.precip,
    precipProb: addPercentageSymbol(day.precipprob),
    precipType: day.preciptype,
    snow: day.snow,
    sunrise: formatTo12Hour(day.sunrise),
    sunset: formatTo12Hour(day.sunset),
    temp: addCelciusSymbols(day.temp),
    tempMax: addCelciusSymbols(day.tempmax),
    tempMin: addCelciusSymbols(day.tempmin),
    windDirection: degreesToCardinal(day.winddir),
    windGust: day.windgust,
    windSpeed: day.windspeed,
  }));
}
