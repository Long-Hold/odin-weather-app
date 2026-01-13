const API_KEY = 'SYJEG9VMFX7C945UL7FBJ8JH7';
const API_LINK = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export async function getWeatherData(location) {
    const request = API_LINK + location + `?key=${API_KEY}`;
    const result = await fetch(request);
    const data = await result.json();

    return data.description;
}