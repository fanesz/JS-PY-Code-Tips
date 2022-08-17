const array = [1, 2, 3, 4, 5, 6, 7, 8]
var count = 0;
console.time("for loop")
for(let i = 0 ; i < array.length ; i++){
    count += array[i]
}
console.timeEnd("for loop")
// = 0.01098ms   //1st

for (let a of array) { 
  count += a 
}
// = 0.01293ms   //2nd

array.forEach(a => { 
  count += a 
})
// = 0.03198ms   //3rd
