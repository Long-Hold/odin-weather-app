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
    datetime: current.datetime,
    feelslike: current.feelslike,
    humidity: current.humidity,
    icon: current.icon,
    precip: current.precip,
    precipProb: current.precipprob,
    precipType: current.preciptype,
    snow: current.snow,
    sunrise: current.sunrise,
    sunset: current.sunset,
    temp: current.temp,
    windDirection: current.winddir,
    windGust: current.windgust,
    windSpeed: current.windspeed,
  };
}

function extractForecastedConditions(days) {
  return days.map((day) => ({
    conditions: day.conditions,
    date: day.datetime,
    description: day.description,
    feelsLike: day.feelslike,
    humidity: day.humidity,
    icon: day.icon,
    precip: day.precip,
    precipProb: day.precipprob,
    precipType: day.preciptype,
    snow: day.snow,
    sunrise: day.sunrise,
    sunset: day.sunset,
    temp: day.temp,
    tempMax: day.tempmax,
    tempMin: day.tempmin,
    windDirection: day.winddir,
    windGust: day.windgust,
    windSpeed: day.windspeed,
  }));
}
