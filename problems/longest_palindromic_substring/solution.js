/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxPal = "";

    let arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        let oddleft = i;
        let oddright = i;

        while (oddleft >= 0 && oddright < arr.length && s.at(oddleft) === s.at(oddright)) {
            if ((oddright - oddleft + 1) > maxPal.length) {
                maxPal = s.slice(oddleft,oddright + 1);
                console.log('maxPal',maxPal,"slice",s.slice(oddleft,oddright + 1))
            }
            oddleft--;
            oddright++;
        }

        let evenleft = i;
        let evenright = i + 1;

        while (evenleft >= 0 && evenright < arr.length && s.at(evenleft) === s.at(evenright)) {
            if ((evenright - evenleft + 1) > maxPal.length) {
                maxPal = s.slice(evenleft,evenright + 1);
                console.log('maxPal',maxPal,"slice",s.slice(evenleft,evenright + 1))
            }
            evenleft--;
            evenright++;
        }
    }

    return maxPal;
};

