var express = require('express');
var router = express.Router();

const heroeController = require('../controllers/heroeController');

/* GET home page. */
router.get('/', heroeController.index);

router.get('/detalle/id/:id', heroeController.detalle);

router.get('/bio/id/:id/:ok?', heroeController.bio);

module.exports = router;
