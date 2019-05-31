/**
 * Returns an integer limited to within the `min` and `max` params
 *
 * @param {number} min - The lowest possible returned value
 * @param {number} max - The highest possible returned value
 * @param {number} num - The value to limit
 *
 * @returns {number}
 */

export default (min, max) => num => Math.max(min, Math.min(num, max));
