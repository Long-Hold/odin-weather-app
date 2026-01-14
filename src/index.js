import { parseWeatherJson } from "./modules/weatherClass";
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
    console.log(weatherObject);
  } catch (error) {
    console.error(
      `An error was caught while retrieving weather data. ${error}`,
    );
  } finally {
    form.reset();
  }
});
