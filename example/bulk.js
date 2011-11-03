
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");
var request = require("request");

// CORE
var io = require("../lib/io")

// BULK
io.check("done.io", function(registered) {
  console.log("Registered:", registered);
});

/* EOF */