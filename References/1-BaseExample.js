var items = new Array("one", "two", "three");

var itemsRef = items;

items.push("four")

console.log(items.length === itemsRef.length);