//connect Node to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wallpaper',
    database: 'candy_db',
})

connection.connect(function(err){
    if(err)throw err;
    // console.log("connected as id: "=connection.threadId);
});

//export the connection
module.exports = connection;