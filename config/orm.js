var connection = require("./connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableInput, col, val, cb) {
        var queryString = "INSERT INTO " + tableInput + " (" + col + ") VALUES ('" + val + "')";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },

    updateOne: function (tableInput, col, val, con1, con2, cb) {
        var queryString = "UPDATE " + tableInput + " SET " + col + " = " + val + " WHERE " + con1 + " = " + con2;
        connection.query(queryString, val, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;