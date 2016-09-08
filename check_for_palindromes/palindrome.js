/**
 * @func palindrome
 * Checks if str is a palindrome
 * @param {String} str
 * @returns {Boolean} true if str is a palindrome otherwise, false
 */
function palindrome(str) {
    // Get rid of non alphanumeric characters
    var cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare the cleaned string to iteself in reverse, return true or false
    return ( cleanedString === cleanedString.split("").reverse().join("") );
}
palindrome("Rac_*& eCar")