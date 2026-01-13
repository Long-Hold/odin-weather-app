const API_KEY = 'SYJEG9VMFX7C945UL7FBJ8JH7';
const API_LINK = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

/**
 * Fetches weather data from the VisualCrossing API.
 * 
 * @param {string} location - The location to fetch weather data for.
 * @returns {Promise<Object>} Weather data object from the API.
 * @throws {Error} When the API request fails.
 */
export async function getWeatherData(location) {
    const request = API_LINK + location + `?key=${API_KEY}`;

    const result = await fetch(request);
    if (!result.ok) {
        throw new Error(result.status);
    }

    const data = await result.json();
    return data;
}