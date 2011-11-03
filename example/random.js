
// ALLOC
var checked = 0;
var available = [];

// MODULES
var fs = require("fs");
var io = require("../lib/io");

// GENERATE RANDOM CHARACTERS
function randomString() {
  var chars = "abcdefghiklmnopqrstuvwxyz";
  var len = 2;
  var randomstring = "";
  for (var i = 0; i < len; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum+1);
  }
  return randomstring;
}

// CHECK INDIVIDUAL
function check(word) {
  io.check(word, function(registered) {
    checked++;
    if (registered === false) {
      available.push(word);
    };
    if (checked === 675) {
      console.log(available);
      var ready = JSON.stringify(available);
      fs.writeFileSync(__dirname + "/twoletter.available.text", ready, "utf8");
    };
  });
};

// RANDOM CHECKS
for (var i = 0; i < 676; i++) {
  var randomTLDCheck = randomString() + ".io";
  check(randomTLDCheck);
};

/* EOF */