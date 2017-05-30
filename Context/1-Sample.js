var obj = {
    yes: function () {

        this.val = true;
    },
    no: function () {
        this.val = false;
    }
};

alert(obj.val == null);

obj.yes();
alert(obj.val == true);

window.no = obj.no;
window.no();

alert( obj.val == true );

alert( window.val == false );