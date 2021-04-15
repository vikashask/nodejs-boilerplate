var http = require("https");
http
  .get("https://cheetos.sk/", function (res) {
    // .get("https://cruesli.nl/", function (res) {
    // .get("https://designmydew.com/", function (res) {
    // .get("https://cheetos.be/home", function (res) {
    console.log("🚀 ~ file: test.js ~ line 4 ~ res", res);
    // If you get here, you have a response.
    // If you want, you can check the status code here to verify that it's `200` or some other `2xx`.
  })
  .on("error", function (e) {
    console.log("🚀 ~ file: test.js ~ line 9 ~ e", e);
    // Here, an error occurred.  Check `e` for the error.
  });
