User.cloneUser = function (user) {

    return new User(

        user.getName(),
        user.getAge()
    );
};

var example = new User();
var clonedUser = User.cloneUser(example);