function changeColor(color) {
    this.style.color = color;
}

//fails - no style object
changeColor("white");

var main = document.getElementById("main");

changeColor.call(main, "black");

function setBodyColor() {
    changeColor.apply(document.body, arguments);
}

setBodyColor("black");