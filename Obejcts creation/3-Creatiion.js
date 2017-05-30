function User() {}

var me = new User();

var you = new me.constructor();

alert( me.constructor == you.constructor );