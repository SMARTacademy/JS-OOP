function checkType(str) {
    if (str.constructor == String)
        str = parseInt(str);

    if (str.constructor == Array)
        str = str.join(',');
}