function User(properties) {

    for (var i in properties) {
        (function () {

            this["get" + i] = function () {
                return properties[i];
            };

            this["set" + i] = function (val) {
                properties[i] = val;
            };
        })();
    }
}

var user = new User({
    name: "Bob",
    age: 44
});

alert(user.name == null);

alert(user.getname() == "Bob");

user.setage(22);
alert(user.getage() == 22);