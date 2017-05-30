function User(name) {
    this.name = name;
}

var me = new User("My Name");

alert(me.name == "My Name");

alert(me.constructor == User);

User("Test");

alert( window.name == "Test" );