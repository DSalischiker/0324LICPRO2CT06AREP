let express = require('express');
let router = express.Router();
let autos = require('../db/index.js');

router.get('/', function(req, res) {
  return res.send(autos.lista);
});

router.get('/brand/:brand', function(req, res) {
  let brand = req.params.brand;
  let resultadoBusqueda = [];
  for (let i = 0; i < autos.lista.length; i++) {
    if (autos.lista[i].marca.toLowerCase() === brand.toLowerCase()) {
      resultadoBusqueda.push(autos.lista[i]);
    }
  }
  if (resultadoBusqueda.length > 0) {
    return res.send(resultadoBusqueda);
  } else {
    return res.send(`No hay autos de marca ${brand}.`);
  }
});

router.get('/color/:color', function(req, res) {
  let color = req.params.color;
  let resultadoBusqueda = [];
  for (let i = 0; i < autos.lista.length; i++) {
    if (autos.lista[i].color === color.toLowerCase()) {
      resultadoBusqueda.push(autos.lista[i]);
    }
  }
  if (resultadoBusqueda.length > 0) {
    return res.send(resultadoBusqueda);
  } else {
    return res.send(`No hay autos de color ${color}.`);
  }
});

router.get('/model/:model/:year?', function(req, res) {
  let model = req.params.model;
  let year = req.params.year;
  let resultadoBusqueda = [];
  if (year == undefined) {
    for (let i = 0; i < autos.lista.length; i++) {
      if (autos.lista[i].modelo === model.toLowerCase()) {
        resultadoBusqueda.push(autos.lista[i]);
      }
    }
  } else {
    for (let i = 0; i < autos.lista.length; i++) {
      if (autos.lista[i].modelo === model.toLowerCase() && autos.lista[i].anio >= year) {
        resultadoBusqueda.push(autos.lista[i]);
      }
    }
  }

  if (resultadoBusqueda.length > 0) {
    return res.send(resultadoBusqueda);
  } else {
    return res.send(`No hay autos que cumplan con el criterio seleccionado. Modelo: ${model}, Año ${year}`);
  }
});

module.exports = router;