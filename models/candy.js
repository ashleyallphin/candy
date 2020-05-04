//import orm into candy.js
var orm = require('../config/orm.js');

var candy = {
    // Display all candy in the db.
    all: function(cb){
        orm.all('candy', function(res) {
            cb(res);
        })
    },
    
    //update the candy to devoured
    update: function(id, cb){
        orm.update('candy',id,cb);
    },

    //create new candy in the database
    create: function(name, cb){
        orm.create('candy', name, cb);
    },
    
    //delete some candy from the database
    deleteOne: function(condition, cb) {
        orm.deleteOne('candy', condition, function(res) {
            cb(res);
        });
    }
};

//export as candy
module.exports = candy;