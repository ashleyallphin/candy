//connect Node to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'z46k5i0daiermb9y',
    password: 'zxwb35z5o6lu0h5c',
    database: 'hf6titk4cbuz194d',
})

connection.connect(function(err){
    if(err)throw err;
    // console.log("connected as id: "=connection.threadId);
});

//export the connection
module.exports = connection;