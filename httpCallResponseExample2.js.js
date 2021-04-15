var http = require("http");
var url = require("url");
// var Promise = require("promise");

module.exports = function (uri) {
  var address = url.parse(uri);
  var parts = uri.split("/");
  var options = {
    host: address.protocol != null ? address.host : parts[0],
    method: "HEAD",
    path:
      address.protocol != null ? address.pathname : parts.slice(1).join("/"),
  };
  var req = http.request(options);
  req.end();
  var promise = new Promise(function (resolve, reject) {
    var connected = false;
    req.on("response", function (res) {
      // console.log("🚀 ~ file: test_2.js ~ line 19 ~ res", res.statusCode);
      connected = res.statusCode < 500;
      resolve(connected);
    });

    req.on("error", function (err) {
      resolve(false);
    });
  });
  return promise;
};

module.exports("https://mountaindew.in/").then(function (isAvailable) {
  console.log(isAvailable);
});
