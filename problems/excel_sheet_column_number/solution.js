/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
  let str = columnTitle.toLowerCase()
  let total = str.charCodeAt(str.length - 1) - 96
  if (str.length > 1) {
    let power = str.length - 1
    let i = 0
    while (power > 0) {
      let letterVal = str.charCodeAt(i) - 96
      total += ((26 ** power) * letterVal)
      power--
      i++
    }
  }
  return total
};