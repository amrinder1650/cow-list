var router = require('express').Router();
var controller = require('./controllers.js');

router.get('/cows', controller.cows.get);
router.post('/cows', controller.cows.post);

module.exports = router;