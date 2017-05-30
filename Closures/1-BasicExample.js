function sayHi(name) {
    // LexicalEnvironment = { name: 'Anton', phrase: undefined }
    var phrase = "Hi, " + name;

    // LexicalEnvironment = { name: 'Anton', phrase: 'Hi, Anton'}
    console.log(phrase);
}

sayHi('Anton');