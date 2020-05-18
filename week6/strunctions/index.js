function upperLowerCase(string) {
    var uppercasedHello = string.toUpperCase();
    var lowercasedHello = string.toLowerCase();
        return uppercasedHello.concat(lowercasedHello);
        
    }
    console.log(upperLowerCase("Kelly"));

function returnFirstHalf(string) {
    var firsthalf = string.slice(0, string.length / 2);
        return firsthalf;
    }
    console.log(returnFirstHalf("Today is a great day"));

function index() {
    var str = "Welcome to my dream world"
    return str.indexOf("dream")

}
console.log(index())

function lastIndex() {
    var str = "Welcome to my dream world."
    return str.lastIndexOf("world")    
}
console.log(lastIndex())