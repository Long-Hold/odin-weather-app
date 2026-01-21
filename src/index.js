import { parseWeatherJson } from "./modules/objects/weatherClass";
import { displayCurrentWeatherData, displayForecastedData } from "./modules/dom/weatherMarkupController";
import { getWeatherData } from "./modules/weatherService";

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const location = formData.get("location").trim().toLowerCase();

  try {
    const weatherData = await getWeatherData(location);
    console.log(weatherData);
    const weatherObject = parseWeatherJson(weatherData);
    console.log("Current Conditions: ", weatherObject.current);
    console.log("Forecasted Conditions: ", weatherObject.forecasted);
    displayCurrentWeatherData(weatherObject);
    displayForecastedData(weatherObject.forecasted);
  } catch (error) {
    console.error(
      `An error was caught while retrieving weather data. ${error}`,
    );
  } finally {
    form.reset();
  }
});
