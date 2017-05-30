function User(name, age) {

    var year = (new Date()).getFullYear() - age;

    this.getYearBorn = function () {
        return year;
    };
}

var user = new User("Bob", 44);

alert(user.getYearBorn() == 1962);

alert(user.year == null);