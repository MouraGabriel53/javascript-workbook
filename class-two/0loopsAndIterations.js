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