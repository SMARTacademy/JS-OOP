function checkType(arg) {

    if (typeof arg == 'undefined') {
        console.log("An error occurred.");
    }

    if (typeof arg == "string")
        arg = parseInt(arg); 

    if (typeof arg == "string")
        arg = arg.split(",");
}