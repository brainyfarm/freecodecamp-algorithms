/**
 * @function factorialize
 * Returns the factorial (!) of n
 * @param {Number} n 
 * @returns {Number}
 */
function factorialize(n) {
	var factorial = 1;
	if( n === 0)
		return 1;
        
	return n * factorialize(n - 1);
}
factorialize(5);