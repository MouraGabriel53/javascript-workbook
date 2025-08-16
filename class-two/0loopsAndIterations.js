//UTILIZE WHEN YOU KNOW THE NUMBER OF REPETITIONS | WHEN YOU DON'T KNOW (LIKE WITH AN ARRAY), YOU CAN USE THE LENGTH PROPERTY

//(INICIALIZATION ; CONDITION ; AFTERTHOUGTH)
for (let i = 0; i < 10; i++) {
    console.log([i])
}

const arr = []

for (let i = 0; i < 10; i++) {
    arr.push([i])
}
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    arr.splice([i])
}
console.log(arr)

//DO ... WHILE
let result = "";
let i = 0;
do {
  i += 1;
  result += i;
} while (i < 5);
console.log(result);

//WHILE
let n = 0;
while (n < 3) {
  n++;
}
console.log(n);

let a = 1
switch (a){
  case a = 1: console.log(a)
  break
  default: console.log(a)
}
