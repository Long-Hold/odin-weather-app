import { formatTo12Hour, degreesToCardinal } from "../utils/dataFormatUtils";

export function parseWeatherJson(weatherData) {
  return {
    address: weatherData.address,
    description: weatherData.description,
    current: extractCurrentConditions(weatherData.currentConditions),
    forecasted: extractForecastedConditions(weatherData.days),
  };
}

function extractCurrentConditions(current) {
  return {
    conditions: current.conditions,
    datetime: formatTo12Hour(current.datetime),
    feelslike: current.feelslike,
    humidity: current.humidity,
    icon: current.icon,
    precip: current.precip,
    precipProb: current.precipprob,
    precipType: current.preciptype,
    snow: current.snow,
    sunrise: formatTo12Hour(current.sunrise),
    sunset: formatTo12Hour(current.sunset),
    temp: current.temp,
    windDirection: degreesToCardinal(current.winddir),
    windGust: current.windgust,
    windSpeed: current.windspeed,
  };
}

function extractForecastedConditions(days) {
  return days.map((day) => ({
    conditions: day.conditions,
    date: formatTo12Hour(day.datetime),
    description: day.description,
    feelsLike: day.feelslike,
    humidity: day.humidity,
    icon: day.icon,
    precip: day.precip,
    precipProb: day.precipprob,
    precipType: day.preciptype,
    snow: day.snow,
    sunrise: formatTo12Hour(day.sunrise),
    sunset: formatTo12Hour(day.sunset),
    temp: day.temp,
    tempMax: day.tempmax,
    tempMin: day.tempmin,
    windDirection: degreesToCardinal(day.winddir),
    windGust: day.windgust,
    windSpeed: day.windspeed,
  }));
}
