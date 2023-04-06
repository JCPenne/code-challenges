/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let failTrigger = true;

    const leftTypes = ['(', '[', '{'];
    const rightTypeMatches = {')': '(', ']': '[', '}': '{'};

    const stack = [];

    s.split('').forEach(bracket => {
        if (leftTypes.includes(bracket)) {
            stack.push(bracket);
        }
        else if (rightTypeMatches[bracket] === stack.at(-1)) {
            stack.pop();
        } else {
            failTrigger = false;
        }
    })

    return (stack.length === 0 && failTrigger) ? true : false;
};