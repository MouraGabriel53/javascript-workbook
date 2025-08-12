//CONSTRUCTORS HELP TO PASS PROTOTYPES BETWEEN FUNCTIONS, SAME AS EXTENDS

// function User(name) {
//     this.name = name
// }


// const newUser1 = new User("David")
// const newUser2 = new User("John")

// console.log(newUser1.name)
// console.log(newUser2.name)

// //PASSING PROPERTIES WITH PROTOTYPE
// User.prototype.sayHello = function() {
//     console.log(`Hello ${this.name}`)
// }

// newUser1.sayHello()
// newUser2.sayHello()

//MORE MODERN WITH CLASS AND EXTENDS

class User {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name)
        this.role = role
    }

    deleteUser(user) {
        console.log(`${this.name} deleted by ${user.name}`)
    }
}

const admin1 = new Admin("Lucas", "User")
admin1.sayHello()
admin1.deleteUser("John") //UNDEFINED. IT WAITS A OBJECT
admin1.deleteUser({ name: "Joe" }) //UNDEFINED. IT WAITS A OBJECT