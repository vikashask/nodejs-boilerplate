var DBSettings = require('./DBSettings');
var genVarSettings = require('./generalVariableSettings');

var AllSettings = {
    'db': DBSettings,
    'genVar': genVarSettings
};

var ApplicationSettings = {
    getDBSettings: function() {
        return ApplicationSettings.getSettingsOf('db');
    },
    generalVariableSettings: function() {
        return ApplicationSettings.getSettingsOf('genVar');
    },
    getSettingsOf: function(what) {
        if (!ApplicationSettings.ENV || !AllSettings[what]) {
            return null;
        }
        return AllSettings[what][ApplicationSettings.ENV];
    },
    hasAllSettings: function() {
        for (var name in AllSettings) {
            if (!AllSettings[name][ApplicationSettings.ENV])
                return false;
        }
        return true;
    }
};

module.exports = ApplicationSettings;
