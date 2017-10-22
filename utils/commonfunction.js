var async = require('async');

function checkBlankObject(obj) {
    var blankArray = [];
    for (key in obj) {
        if (obj[key].required == 1 && obj[key].value === '') {
            blankArray.push(key + " is empty string");
        } else if (obj[key].required == 1 && obj[key].value === undefined) {
            blankArray.push(key + " is undefined");
        } else if (obj[key].required == 1 && obj[key].value === null) {
            blankArray.push(key + " is null");
        } else if (obj[key].required == 1 && !obj[key].value && obj[key].value != 0) {
            blankArray.push(key + " is not defined");
        }
    }
    return blankArray;
};
exports.checkBlankObject = checkBlankObject;

function checkValidations(obj) {
    var validateArray = [];
    for (key in obj) {
        if (obj[key].required == 1 && obj[key].is_email == 1 && !validateEmail(obj[key].value)) {
            validateArray.push(key + " is not valid email.");
        } else if (obj[key].required == 1 && obj[key].is_password == 1 && !validatePassword(obj[key].value)) {
            validateArray.push(key + " is not valid string.");
        } else if (obj[key].required == 1 && obj[key].is_mobile == 1 && !validateMobile(obj[key].value)) {
            validateArray.push(key + " is not valid mobile.");
        } else if (obj[key].required == 1 && obj[key].is_number == 1 && !isNumeric(obj[key].value)) {
            validateArray.push(key + " is not valid number.");
        }
    }
    return validateArray;
};
exports.checkValidations = checkValidations;

function checkBlankValue(res, body, callback) {

    var checkBlankData = checkBlankObject(body);
    if (checkBlankData.length) {
        var response = {
            is_error: 1,
            flag: 1,
            tracking_id: 1,
            err: "Value missing",
            value_missing: checkBlankData
        };
        console.log("Response ", response);
        res.send(JSON.stringify(response));
    } else {
        var validate = checkValidations(body);
        if (validate.length) {
          var response = {
              is_error: 1,
              flag: 2,
              tracking_id: 2,
              err: "Validation failed",
              validation_failed: validate
          };
          console.log("Response ", response);
          res.send(JSON.stringify(response));
        } else {
            callback(null);
        }
    }
};
exports.checkBlankValue = checkBlankValue;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function validatePassword(password) {
    if (password.trim().length == 0) {
        return false;
    } else if (typeof password === 'string') {
        return true;
    } else {
        return false;
    }
};

function validateMobile(mobile) {
    var mobile_first = mobile.split("-")[0];
    var mobile_second = mobile.split("-")[1];
    if (mobile.trim().length == 0) {
        return false;
    } else if (mobile_first.charAt(0) != "+") {
        return false;
    } else if (mobile_second.length < 9) {
        return false;
    } else if (mobile_first.length == 1) {
        return false;
    } else {
        return true;
    }
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
