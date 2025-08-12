//OBJECTS ARE MEMORIES VALUES
//NAME IS A KEY AND "DAVID" IS A VALUE
//EACH PROTOTYPE (__proto__) SHARE YOUR PROPERTIES OF OTHER

const user = {
    Name: "David",
    Age: 19,
    Job: "Software Developer",
    __proto__: {
        color: "black",
        country: "US",
        __proto__: {
            socialMedia: "david.github.com",
            error: {
                message: "it's wrong" //UNDEFINED | I CAN'T SET A PROTOTYPE WITHOUT __proto__, DON'T SHARE YOUT PROTOTYPES WITH OTHERS
                //TO ACCESS IT -> user.error.message
            }
        }
    }
}

console.log(user)
console.log(user.Name)
console.log(user.Age)
console.log(user.Job)
console.log(user.color)
console.log(user.country)
console.log(user.preferences) //UNDEFINED
console.log(user.socialMedia)
console.log(user.message)

//IT'S BETTER CREATE AN INHERITANCE WHITH Object.create THEN __proto__
//CREATE AN OBJECT
const obj = { Name: "Gabriel" }
//PASS THE INHERITANCE TO OTHER OBJECT
const otherObj = Object.create(obj)
otherObj.Age = 89
otherObj.Job = "Driver"
//OTHER OBJECT RECIVE THE INHERITANCE
const userTwo = Object.create(otherObj)
console.log(userTwo.Name)
console.log(userTwo.Age)
console.log(userTwo.Job)
