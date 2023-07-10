/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const orderedVowels = [];
    const splitString = s.split('');

    splitString.map(letter => {
        if (vowels.includes(letter)) {
            orderedVowels.push(letter);
        }
    })
    splitString.map((letter, index) => {
        if (vowels.includes(letter)) {
            splitString[index] = orderedVowels.at(-1);
            orderedVowels.pop(-1)
        }
    })
    return splitString.join('');
};

//Initial loop to create indexed vowel dictionary
//Second loop to replace vowel with last in dictionary and pop off used vowel