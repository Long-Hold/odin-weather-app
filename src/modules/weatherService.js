const API_KEY = "SYJEG9VMFX7C945UL7FBJ8JH7";
const API_LINK =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_GROUPS =
  "&elements=add:resolvedAddress,remove:cloudcover,remove:datetimeEpoch,remove:dew,remove:feelslikemax,remove:feelslikemin,remove:moonphase,remove:precipcover,remove:pressure,remove:severerisk,remove:snowdepth,remove:solarenergy,remove:solarradiation,remove:stations,remove:uvindex,remove:visibility";
const UNIT_GROUP = "&unitGroup=metric";
/**
 * Fetches weather data from the VisualCrossing API.
 * This function will retrieve the next 7 days worth of forecast data.
 *
 * @param {string} location - The location to fetch weather data for.
 * @returns {Promise<Object>} Weather data object from the API.
 * @throws {Error} When location parameter is empty.
 * @throws {Error} When the API request fails.
 */
export async function getWeatherData(location) {
  if (!location || !location.trim()) {
    throw new Error("Location cannot be blank.");
  }

  const encodedLocation = encodeURI(location);

  const request =
    API_LINK +
    encodedLocation +
    '/next7days' +
    `?key=${API_KEY}` +
    UNIT_GROUP +
    API_GROUPS;

  const result = await fetch(request);
  if (!result.ok) {
    throw new Error(result.status);
  }

  const data = await result.json();
  return data;
}
