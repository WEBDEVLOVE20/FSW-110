var header = document.createElement("h1")
header.textContent = "DJ JS"
header.style.textAlign = "center"
document.body.append(header);

var para = document.createElement("p")
para.textContent = "The people's most popular online DJ"
para.style.textAlign = "center"
document.body.append(para);

var square = document.createElement("div")
square.style.borderStyle = "solid"
square.style.marginLeft = "250px"
square.style.marginRight = "250px"
square.style.padding = "275px"
document.body.append(square);

square.addEventListener("mouseover", function() {
square.style.background = "blue" 
});

square.addEventListener("mousedown", function() {
square.style.background = "red" 
});

square.addEventListener("mouseup", function() {
square.style.background = "yellow" 
});

square.addEventListener("dblclick", function() {
square.style.background = "green" 
});

document.body.addEventListener("wheel", function() {
square.style.background = "orange" 
});

document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "b" || x === "B") {
        square.style.background = "blue"
    }
});

document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "r" || x === "R") {
        square.style.background = "red"
    }
});

document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "y" || x === "Y") {
        square.style.background = "yellow"
    }
});

document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "g" || x === "G") {
        square.style.background = "green"
    }
});

document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "o" || x === "O") {
        square.style.background = "orange"
    }
});