var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      })
    },
    insertOne: function(col, val, cb) {
      orm.insertOne("burgers", col, val, function(res) {
        cb(res);
      })
    },
    updateOne: function(col, val, con1, con2, cb) {
      orm.updateOne("burgers", col, val, con1, con2, function(res) {
        cb(res);
      })
    }
  };
  
module.exports = burger;