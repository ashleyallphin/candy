var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'buo30rvf6z6zwa4o',
    password: 'm8irp59q4916vd8u',
    database: 'bygbjx7n0gi8mkkg',
})

var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'wallpaper',
        database: 'candy_db',
    });
};

connection.connect(function(err){
    if(err)throw err;
    // console.log("connected as id: "=connection.threadId);
});

//export the connection
module.exports = connection;