//connect Node to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'k8gp258l5e5r8izn',
    password: 'ihzop6lx7gaf8i7w',
    database: 'funzar6wy8fd1hsl',
})

connection.connect(function(err){
    if(err)throw err;
    // console.log("connected as id: "=connection.threadId);
});

//export the connection
module.exports = connection;