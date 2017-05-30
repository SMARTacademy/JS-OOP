function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getName = function () {
    return this.name;
};

User.prototype.getAge = function () {
    return this.age;
};

var user = new User("Bob", 44);

alert(user.getName() == "Bob");
alert(user.getAge() == 44);