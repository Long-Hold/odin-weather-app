import "./styles/styles.css";
import { parseWeatherJson } from "./modules/objects/weatherClass";
import {
  displayCurrentWeatherData,
  displayForecastedData,
} from "./modules/dom/weatherMarkupController";
import { getWeatherData } from "./modules/weatherService";
import {
  removeLoadingIcon,
  renderLoadingIcon,
} from "./modules/dom/loadingIconController";

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const loadingIcon = renderLoadingIcon();
  const formData = new FormData(event.target);
  const location = formData.get("location").trim().toLowerCase();

  try {
    const weatherData = await getWeatherData(location);

    const weatherObject = parseWeatherJson(weatherData);

    displayCurrentWeatherData(weatherObject.current);
    displayForecastedData(weatherObject.forecasted);
  } catch (error) {
    console.error(
      `An error was caught while retrieving weather data. ${error}`,
    );
  } finally {
    removeLoadingIcon(loadingIcon);
    form.reset();
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  const defaultLocation = "Hamilton, Ontario";
  try {
    const weatherData = await getWeatherData(defaultLocation);

    const weatherObject = parseWeatherJson(weatherData);

    displayCurrentWeatherData(weatherObject.current);
    displayForecastedData(weatherObject.forecasted);
  } catch (error) {
    console.error(
      `An error was caught while retrieving weather data. ${error}`,
    );
  }
});
