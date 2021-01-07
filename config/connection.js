// Acquiring and setting mysql connection
const mysql = require ("mysql");
var connection;

// Setting a connection to jawsDB foor Heroku deployment
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'project2_db'
    });
};

// Creating connection
connection.connect(function(err){
    if (err) {
        console.err("error connecting: "+ err.stack);
        return;
    };
    console.log("connected as id: " + connection.threadId);
});

// Exporting connection object to use in other files
module.exports = connection;