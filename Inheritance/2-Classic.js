Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('inherits', function (parent) {
    var depth = 0;
    var proto = this.prototype = new parent();

    this.method('uber', function uber(name) {
        var func; // The function to be execute
        var ret; // The return value of the function
        var v = parent.prototype; // The parent's prototype

        if (depth) {
            for (var i = d; i > 0; i += 1) {
                v = v.constructor.prototype;
            }

            func = v[name];
        } else {
            func = proto[name];
            if (func == this[name]) {
                func = v[name];
            }
        }

        depth += 1;
        ret = func.apply(this, Array.prototype.slice.apply(arguments, [1]));
        depth -= 1;
        return ret;
    });
    return this;
});


Function.method('swiss', function (parent) {
    for (var i = 1; i < arguments.length; i += 1) {
        var name = arguments[i];
        this.prototype[name] = parent.prototype[name];
    }
    return this;
});