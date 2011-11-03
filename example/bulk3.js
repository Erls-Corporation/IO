
// MODULES
var checked = 0;
var available = [];
var fs = require("fs");
var io = require("../lib/io");

// LOAD WORDLIST
var array = fs.readFileSync(__dirname + "/threeletterwords.txt").toString().split("\n");

// CHECK INDIVIDUAL
function check(word) {
  io.check(word, function(registered) {
    checked++;
    console.log(checked + "/511");
    if (registered === false) {
      available.push(word);
    };
    if (checked === 511) {
      var ready = JSON.stringify(available);
      fs.writeFileSync(__dirname + "/threeletterwords.available.text", ready, "utf8");
    };
  });
};

// ITERATE
for (var i = 0; i < array.length; i++) {
  var word = array[i];
  check(word.toLowerCase() + ".io");
};

/* EOF */