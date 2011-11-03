
// ALLOC
var checked = 0;
var combos = new Array();
var available = [];

// MODULES
var fs = require("fs");
var io = require("../lib/io");

// GENERATE RANDOM CHARACTERS
function randomString() {
  var chars = "abcdefghiklmnopqrstuvwxyz";
  var len = 3;
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
    if (checked === 625) {
      console.log(available);
      var ready = JSON.stringify(available);
      fs.writeFileSync(__dirname + "/twoletter.available.text", ready, "utf8");
    };
  });
};

// ARRAY TEST
function oc(a) {
  var o = {};
  for (var i = 0; i < a.length; i++) {
    o[a[i]] = "";
  };
  return o;
};

// RANDOM CHECKS
for (var i = 0; i < 99999; i++) {
  var random = randomString() + ".io";
  if (random in oc(combos)) {
  } else {
    combos.push(random);
    //check(random);
  };
};

console.log(combos.length);

/* EOF */