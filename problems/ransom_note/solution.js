/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};

    for (let i = 0; i < magazine.length; i++) {
        const currentLetter = magazine.at(i);
        map[currentLetter] ? map[currentLetter]++ : map[currentLetter] = 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const currentLetter = ransomNote.at(i);
        if (map[currentLetter] > 0) {
            map[currentLetter]--;
        } else {
            return false;
        }
    }
    return true;
};