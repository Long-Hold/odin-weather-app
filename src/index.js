import { getWeatherData } from "./modules/weatherService";

const button = document.querySelector('button');
button.addEventListener('click', async () => {
    try {
        const weatherData = await getWeatherData('Toronto');
        console.log(weatherData);
    } catch(error) {
        console.error(`An error was caught while retrieving weather data. ${error}`);
    }
});