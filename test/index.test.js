
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");
var request = require("request");

// CORE
var io = require("../lib/io")

// VOWS!
vows.describe("General Module Tests").addBatch({
  "when instantiating short" : {
    topic : function() { 
      return io;
    },
    "io should be a function" : function(topic) {
      topic.should.be.a("function");
    },
  },
  "when making a request to google" : {
    topic : function() {
      request("http://www.google.com", this.callback);
    },
    "we should get back a 200" : function (error, response, body) {
      assert.equal(response.statusCode, 200);
    }
  },
  "when making a request to check an unavailable .io TLD such as done.io" : {
    topic : function() {
      io.check("done.io", this.callback);
    },
    "we should get back data, and the domain should show as registered" : function(registered) {
      assert.notEqual(registered, null);
      assert.equal(registered, true);
    }
  },
  "when making a request to check a random definitively available .io TLD" : {
    topic : function() {
      io.check("zzzzzzzzzz12345.io", this.callback);
    },
    "we should get back data, and the domain should show as NOT registered" : function(registered) {
      assert.notEqual(registered, null);
      assert.equal(registered, false);
    }
  },
}).export(module);

/* EOF */