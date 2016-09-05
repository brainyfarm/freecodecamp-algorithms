/**
 * @function reverseString 
 * Returns the reversed version of str
 * @param {String} str
 * @returns {String}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");