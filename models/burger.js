var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      })
    },
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      })
    },
    updateOne: function(con2, cb) {
      orm.updateOne("burgers", "devoured", true, "id", con2, function(res) {
        cb(res);
      })
    }
  };

module.exports = burger;