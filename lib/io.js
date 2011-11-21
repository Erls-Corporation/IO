
/*!

  io
  https://github.com/edwardhotchkiss/IO/
  Rapid Testing of available/unavailable .IO TLDs w/ WordLists & REST API 

*/

// CORE MODULES
var request = require("request");

// .EXPORTS
module.exports = IO = function(){};

// CHECK .IO TLD
IO.check = function(domain, callback) {
  request("http://www.nic.io/cgi-bin/whois?query=" + domain, function(error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      var pattern = new RegExp(/Domain Available/);
      var match = body.search(pattern);
      if (match === -1) {
        // AVAILABLE
        callback(true);
      } else {
        // UNAVAILABLE
        callback(false);
      };
    };
  }); 
};

/* EOF */