
// MODULES
var fs = require("fs");
var io = require("../lib/io");

// LOAD WORDLIST
var array = fs.readFileSync(__dirname + "/threeletterwords.txt").toString().split("\n");

// BULK CHECK
for (var i = 0; i < array.length; i++) {
  var word = array[i];
  check(word);
};

// CHECK INDIVIDUAL
function check(word) {
  io.check(word, function(registered) {
    if (registered === false) {
      console.log("DOMAIN AVAILABLE:", word);
    };
  });
};

/* EOF */