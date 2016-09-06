/**
 * @function palindrome
 * Check to see if str is a palindrome
 * @params {String} str 
 * @returns {Boolean}
 */
function palindrome(str) {
    // Get rid of non alphanumeric characters
    var cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare the cleaned string to iteself in reverse, return true or false
  	return ( cleanedString === cleanedString.split("").reverse().join("") );
}
palindrome("Rac_*& eCar")