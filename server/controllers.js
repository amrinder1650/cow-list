var models = require('./models.js');

module.exports = {
  cows: {
    get: function (req, res) {
      models.cows.get((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      })
    },
    post: function (req, res) {
      models.cows.post(req.body.data, (err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.send(results);
        }
      })
    }
  }
};