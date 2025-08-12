//THIS POINTS TO THE OBJECT THAT CALLS THE FUNCTION

function sayHello() {
    console.log(`Hello ${this.name}`)
}

const user = {
    name: "Gabriel",
    sayHello
}

user.sayHello()