const icons = require.context('../../assets/icons', false, /\.svg$/);

export function getWeatherIcon(iconName) {
    return icons(`./${iconName}.svg`);
}