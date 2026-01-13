import { getWeatherData } from "./modules/weatherService";

const button = document.querySelector('button');
button.addEventListener('click', () => console.log(getWeatherData('Toronto')));