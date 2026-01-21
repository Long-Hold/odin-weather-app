const icons = require.context('../../assets/icons', false, /\.svg$/);

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
        console.error(`Image not found: ${iconName}`);
        return icons('./image-not-found.svg');
    }
}