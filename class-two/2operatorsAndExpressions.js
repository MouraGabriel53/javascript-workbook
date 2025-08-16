//CONDICIONAL
let user = "Gabriel"
user == "Gabriel" ? console.log("Yes") : console.log("No")

//COMMA
let x = 0 
let z = (x += 1, x += 2, x += 3)
console.log(x)
console.log(z)

//UNARY
    // DELETE
    const obj = { "key" : "value" }
    console.log(obj.key)
    delete obj.key
    console.log(obj.key)
    //TYPEOF
    console.log(typeof "1")
    //VOID
    let w = 5 + 5
    console.log(void(w))

//COMPARATION
if ("1" === 1) {
    console.log("Yes")
} else {
    console.log("No")
}

//ASSINGMENT
let p = 0
console.log(p-=1)

//ARITHMETIC
let d = 5 % 87
console.log(d)

//BITWISE
let y = 60
let u = 0
console.log(y >> u)

//LOGICAL
let r = 0
console.log( r ?? 32)
