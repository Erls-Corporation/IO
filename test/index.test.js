
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");

// CORE
var io = require("../")

// VOWS!
vows.describe("General Module Tests").addBatch({
  "when instantiating short" : {
    topic : function() { 
      return io;
    },
    "io should be a function" : function(topic) {
      topic.should.be.a("function");
    },
  }
}).export(module);

/* EOF */