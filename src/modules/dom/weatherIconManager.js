const icons = require.context('../../assets/icons/weatherIcons', false, /\.svg$/);
const thumbnails = require.context('../../assets/icons/thumbnails', false, /\.png$/);

/**
 * Searches for an icon that matches the passed parameter.
 * If the icon cannot be found, a default placeholder is returned instead.
 * 
 * @param {string} iconName - The string name of the icon to search for.
 * @returns {string}
 */
export function getWeatherIcon(iconName) {
    try {
        return icons(`./${iconName}.svg`);
    } catch (error) {
        console.error(error);
        console.error(`Image not found: ${iconName}`);
        return icons('./image-not-found.svg');
    }
}

/**
 * Searches for a thumbnail that matches the passed paramter.
 * If the thumbnail cannot be found, a default placeholder is returned instead.
 * 
 * @param {string} thumbnailName - The string name of the thumbnail to search for.
 * @returns {string} A string of the image filepath
 */
export function getDataThumbnail(thumbnailName) {
    try {
        return thumbnails(`./${thumbnailName}.png`);
    } catch(error) {
        console.error(error);
        console.error(`Image not found: ${thumbnailName}`);
        return icons('./image-not-found.svg');
    }
}