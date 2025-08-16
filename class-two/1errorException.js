try {
    someThing()
} catch(error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stak)
    throw new Error("New ERROR");
} finally {
    console.log("allways execute")
}