var _ = require('lodash');

exports.sendErrorFlagResponse = function(flag, tracking_id, err, res) {
    var response = {
        is_error: 1,
        flag: flag,
        tracking_id: tracking_id,
        err: err
    };
    console.log("Response ", response);
    res.send(JSON.stringify(response));
};

exports.sendSuccessFlagResponse = function(flag, res) {
    var response = {
        is_error: 0,
        flag: flag
    };
    console.log("Response ", response);
    res.send(JSON.stringify(response));
};

exports.sendSuccessFlagResponseWithData = function(flag, data, res) {
    var response = {
        is_error: 0,
        flag: flag
    };
    console.log("Response ", response);
    res.send(JSON.stringify(_.extend(response, data)));
};

exports.sendErrorFlagResponseWithData = function(flag, tracking_id, err, data, res) {
    var response = {
        is_error: 1,
        flag: flag,
        tracking_id: tracking_id,
        err: err
    };
    console.log("Response ", response);
    res.send(JSON.stringify(_.extend(response, data)));
};
