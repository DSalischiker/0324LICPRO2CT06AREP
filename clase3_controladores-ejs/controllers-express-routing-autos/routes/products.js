let express = require('express');
let router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.index);

router.get('/marca/:marca', productController.marca);

router.get('/color/:color', productController.color);

router.get('/anio/:anio', productController.anio)

router.get('/modelo/:modelo/:anio?', productController.modelo);

module.exports = router;