//source = https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/


let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);
// output = [ 'A', 'B', 'C' ]


let chars = ['A', 'B', 'A', 'C', 'B'];
chars.indexOf('B');
// output = 1
