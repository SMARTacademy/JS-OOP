for(var i = 0; i < 10; i++) {
    setTimeout((function(i) {
      console.log(i);
    })(i), 10)
}

//0 - 9
//10 - 10
//0 - 0
//not work