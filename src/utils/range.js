/**
 * Returns an array of integers between and including the `from` and `to` params
 *
 * @param {number} from - The first number in the range
 * @param {number} to - The last number in the range
 * @param {number} [step = 1] - The value to increment by
 *
 * @returns {array}
 */

export default (from, to, step = 1) => {
  const arr = [];

  for (let i = from; i <= to; i += step) {
    arr.push(i);
  }

  return arr;
};
