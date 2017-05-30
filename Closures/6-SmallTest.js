var currentCount = 1;

function makeCounter() {
    return function () {
        return currentCount++;
    };
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log(counter()); // 1 1 2 1
console.log(counter()); // 1 2 3 2

console.log(counter2()); // 1 1 4 3
console.log(counter2()); // 1 2 5 4