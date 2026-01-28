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
  const forecastLength = createWeatherRangeString(6);
  const request =
    API_LINK +
    encodedLocation +
    forecastLength +
    `?key=${API_KEY}` +
    UNIT_GROUP +
    API_GROUPS;

  console.log(request);

  const result = await fetch(request);
  if (!result.ok) {
    throw new Error(result.status);
  }

  const data = await result.json();
  return data;
}

/**
 * Returns a formatted string that represents a range of dates to retrieve weather data of
 * starting from tomorrow's date relative to the devices current date.
 * 
 * @param {int} range - The amount of days to include after tomorrow.
 * @returns {string} A formatted string to insert into the Visual Crossing API.
 * 
 * @example
 * //Returns the next 7 days worth of weather data starting from the day after the current date.
 * // If today was January 1st, then the function returns '/<year>-01-02/<year>-01-08' (January 2nd to January 8th).
 * createWeatherRangeString(6);
 */
function createWeatherRangeString(range) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  const endDate = new Date();
  endDate.setDate(startDate.getDate() + range);

  const startDateISO = startDate.toISOString().split('T')[0];
  const endDateISO = endDate.toISOString().split('T')[0];

  return `/${startDateISO}/${endDateISO}`;
}