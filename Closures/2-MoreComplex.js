var num = 10;

function addNum(myNum) {
    return num + myNum;
}

num = 15;

console.log(addNum(5) == 15, "Add two numbers together, one from a closure.");