//CLOSURES
function outerFunction(){
    var message = 'howdy';
    function greet() {
        console.log(message); 
        return
    }
    return greet();
}

console.log(outerFunction())