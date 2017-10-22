var mysql = require('mysql');
var DBSettings = require('./../config/ApplicationSettings').getDBSettings();

var db_config = {
    host: DBSettings.host,
    user: DBSettings.username,
    password: DBSettings.password,
    database: DBSettings.database
};
// if (DBSettings.ssl) {
//     db_config.ssl = {
//       ca: fs.readFileSync(DBSettings.ssl.ca),
//       key : fs.readFileSync(DBSettings.ssl.key),
//       cert : fs.readFileSync(DBSettings.ssl.cert)
//     }
// }


function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since// the old one cannot be reused.
    connection.connect(function(err) { // The server is either down
        if (err) { // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        } else {
            console.log("----- MYSQL connection Setup successful -----");
        }
    });
    connection.on('error', function(err) {
        console.log('!!!!!!MYSQL DB error!!!!!!! ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect(); // lost due to either server restart, or a
        } else if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
            console.log("RESTART THE SERVER");
            handleDisconnect();
        } else { // connnection idle timeout (the wait_timeout
            throw err; // server variable configures this)
        }
    });
}

handleDisconnect();
