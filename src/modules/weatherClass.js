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
    airQualityIndex: current.aqius,
    cloudCover: current.cloudcover,
    conditions: current.conditions,
    feelsLike: current.feelslike,
    humidity: current.humidity,
    precip: current.precip,
    precipProb: current.precipprob,
    precipType: current.preciptype,
    presure: current.pressure,
    snow: current.snow,
    snowDepth: current.snowdepth,
    sunrise: current.sunrise,
    sunset: current.sunset,
    temp: current.temp,
    visibility: current.visibility,
    windDirection: current.winddir,
    windGust: current.windgust,
    windSpeed: current.windspeed,
  };
}

function extractForecastedConditions(days) {
  return days.map((day) => ({
    date: day.datetime,
    temp: day.temp,
    tempMax: day.tempmax,
    tempMin: day.tempmin,
    feelsLike: day.feelslike,
    humidity: day.humidity,
    conditions: day.conditions,
    description: day.description,
    precip: day.precip,
    precipProb: day.precipprob,
    precipType: day.preciptype[day.preciptype.length - 1],
    snow: day.snow,
    snowDepth: day.snowdepth,
    windDirection: day.winddir,
    windGust: day.windgust,
    windSpeed: day.windspeed,
  }));
}
