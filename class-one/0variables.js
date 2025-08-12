//IT'S GLOBAL AND CAN BE REDECLARED | I CAN USE VAR INSTEAD OF INICIATILATION
var number = 10
console.log(number)
var number = 90
console.log(number)
number = 18
console.log(number)

console.log(y) //UNDEFINED
var y = 1

//IT'S BLOCK OR LOCAL AND CAN'T BE REDECLARED | I CAN USE LET INSTEAD OF INICIATILATION
let otherNumber = 12.33
console.log(otherNumber)
// let otherNumber = 19 ERROR
otherNumber = 90 
console.log(otherNumber) //90

// console.log(x) ERROR
// let x = 10

//IT'S BLOCK OR LOCAL AND CAN'T BE REDECLARED OR UTILIZED INSTEAD OF INICIALIZATION
const moreNumber = "44"
console.log(moreNumber)
// const moreNumber = "Gabriel" ERROR