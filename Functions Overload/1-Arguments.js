function postMessage(msg, obj) {
    if(arguments.length == 2)
        obj.handleMessage(msg);
    else
        console.log(msg);
}

postMessage("SMART academy");

postMessage("How u doing?", {
    handleMessage: function (msg) {
        console.log("Some another message");
    }
});

function makeArrayFromArguments() {
    var arr = [];

    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    return arr;
}