const Input1 = ['anagram', 'nagaram'];
const Input2 = ['rat', 'car'];

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const newT = t.split('').sort().join('');
  const newS = s.split('').sort().join('');
  return newT === newS && true;
}

console.log(isAnagram(Input1[0], Input1[1]));
console.log(isAnagram(Input2[0], Input2[1]));
