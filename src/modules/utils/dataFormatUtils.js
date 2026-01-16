/**
 * Converts a 24-hour time string to 12-hour format with AM/PM.
 * 
 * @param {string} time24 - Time in 24-hour format (HH:MM, e.g., "14:30" or "09:05").
 * @returns {string} Time in 12-hour format (e.g., "2:30 PM", "9:05 AM").
 * @throws {Error} If time24 is not a valid string or contains invalid hours/minutes.
 * 
 * @example
 * formatTo12Hour("14:30") // Returns "2:30 PM"
 * formatTo12Hour("09:05") // Returns "9:05 AM"
 * formatTo12Hour("00:00") // Returns "12:00 AM"
 */
export function formatTo12Hour(time24) {
    if (!time24 || typeof time24 !== 'string') {
        throw new Error('Invalid time format');
    }

    const [hoursStr, minutesStr] = time24.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    if (isNaN(hours) || hours > 23 || hours < 0) {
        throw new Error('Invalid hours value');
    }

    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        throw new Error('Invalid minutes value');
    }

    const period = (hours >= 12) ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    const minutesNormalized = `${minutes}`.padStart(2, '0');
    return `${hours12}:${minutesNormalized} ${period}`;
}

export function degreesToCardinal(degrees) {
    if (!degrees || isNaN(degrees)) {
        throw new Error('Invalid degrees format');
    }
    const directions = ['N','NE','E','SE','S','SW','W','NW'];
    const degreePerDirection = 360 / directions.length;

    const index = Math.round((degrees % 360) / degreePerDirection);
    return directions[index % directions.length];
}