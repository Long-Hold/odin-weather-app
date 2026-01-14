export function parseWeatherJson(weatherData) {
    return {
        address: weatherData.address,
        description: weatherData.description,
        cloudCover: weatherData.currentConditions.cloudcover,
        feelsLike: weatherData.currentConditions.feelslike,
    }
}