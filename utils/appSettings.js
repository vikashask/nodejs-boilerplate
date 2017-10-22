var commonfunction = require('./commonfunction');
var async = require('async');
var sendResponse = require('./sendResponse');

exports.getSettings = function(req, res) {
    var body = {
        user_name: {
            value: req.body.user_name,
            required: 1
        },
        password: {
            value: req.body.password,
            required: 1,
            is_password: 1
        }
    };

    // +91-98766667961
    var app_type = req.body.app_type;
    async.waterfall([
        function(callback) {
            commonfunction.checkBlankValue(res, body, callback);
        }
    ], function(err) {
        async.parallel([
            function(callback) {
                var sql = "SELECT `flag`, `text`, `show_popup` FROM `dynamic_popups` WHERE `app_type` = ? AND `app_version` = ? ORDER BY `flag`";
                connection.query(sql, [body.app_type.value, body.app_version.value], function(err, result) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, result);
                    }
                });
            }
        ], function(err, results) {
            if (err) {
                var response = {
                    flag: -1,
                    error: "Try again",
                    err: err,
                    show_popup: 0
                };
                console.log("Response ", response);
                res.send(JSON.stringify(response));
            } else {
              var response = {
                  flag: 0,
                  show_popup: 0,
                  popups: results[0]
              };
              res.send(JSON.stringify(response));
            }
        });
    });
};
