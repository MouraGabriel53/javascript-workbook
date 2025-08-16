//Values and Keys
const user = new Map()

user.set("Gabriel", 10)

const value = user.get("Gabriel")
console.log(value)

user.delete("Gabriel")
const newValue = user.get("Gabriel")
console.log(newValue)

//Returns a specified element from the Map object
user.get()

//Adds a new element with a specified key and value to the Map
user.set()

//True if an element in the Map existed and has been removed, or false if the element does not exist
user.delete()

//Remove all Keys and Values
user.clear()

//Executes a provided function once per each key/value pair in the Map, in insertion order
user.forEach()

//Returns an iterable of keys in the map
user.keys()

//Returns an iterable of values in the map
user.values()

//Returns an iterable of key, value pairs for every entry in the map.
user.entries()

//Boolean indicating whether an element with the specified key exists or not
user.has()

//The number of elements in the Map
user.size()

//Only values
const car = new Set()