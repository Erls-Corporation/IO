
/*!

  io
  https://github.com/edwardhotchkiss/io/
  Rapid Testing of available/unavailable .IO TLDs w/ WordLists & REST API 

*/

// CORE MODULES
var request = require("request");

// .EXPORTS
module.exports = io = function(){};

// CHECK .IO TLD
io.check = function(domain, callback) {
  request("http://www.nic.io/cgi-bin/whois?query=" + domain, function(error, response, body) {
    callback(true);
  }); 
};

/* EOF */