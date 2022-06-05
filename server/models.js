var connection = require('../database/index.js').connection;

module.exports = {
  cows: {
    get: function(callback) {
      connection.query('select * from cows', function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    },
    post: function(cow, callback) {
      var query = `insert into cows (name, description) values ("${cow.name}", "${cow.description}");`;
      connection.query(query, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }
  }
};