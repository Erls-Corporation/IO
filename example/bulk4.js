
// MODULES
var checked = 0;
var available = [];
var fs = require("fs");
var io = require("../lib/io");

// LOAD WORDLIST
var array = fs.readFileSync(__dirname + "/fourletterwords.txt").toString().split(" ");

// CHECK INDIVIDUAL
function check(word) {
  io.check(word, function(registered) {
    checked++;
    console.log(checked + "/5430");
    if (registered === false) {
      available.push(word);
    };
    if (checked === 5430) {
      var ready = JSON.stringify(available);
      fs.writeFileSync(__dirname + "/fourletterwords.available.text", ready, "utf8");
    };
  });
};

for (var i = 0; i < array.length; i++) {
  var word = array[i];
  check(word.toLowerCase() + ".io");
};

console.log(array.length);

/* EOF */