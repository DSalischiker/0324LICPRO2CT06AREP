const autos = require('../db/index.js');

const productController = {
  index: function(req, res) {
    return res.send(autos.lista);
  },
  marca: function(req, res) {
    let marca = req.params.marca;
    let resultadoBusqueda = [];
    for (let i = 0; i < autos.lista.length; i++) {
      if (autos.lista[i].marca.toLowerCase() === marca.toLowerCase()) {
        resultadoBusqueda.push(autos.lista[i]);
      }
    }
    if (resultadoBusqueda.length > 0) {
      return res.send(resultadoBusqueda);
    } else {
      return res.send(`No hay autos de marca ${marca}.`);
    }
  },
  color: function(req, res) {
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
  },
  anio: function(req, res) {
    let anio = req.params.anio;
    let resultadoBusqueda = [];
    for (let i = 0; i < autos.lista.length; i++) {
      if (autos.lista[i].anio == anio) {
        resultadoBusqueda.push(autos.lista[i]);
      }
    }

    if (resultadoBusqueda.length > 0) {
      return res.send(resultadoBusqueda);
    } else {
      return res.send(`No hay autos del año ${anio}`);
    }
  },
  modelo: function(req, res) {
    let modelo = req.params.modelo;
    let anio = req.params.anio;
    let resultadoBusqueda = [];
    if (anio == undefined) {
      for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].modelo === modelo.toLowerCase()) {
          resultadoBusqueda.push(autos.lista[i]);
        }
      }
    } else {
      for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].modelo === modelo.toLowerCase() && autos.lista[i].anio >= anio) {
          resultadoBusqueda.push(autos.lista[i]);
        }
      }
    }

    if (resultadoBusqueda.length > 0) {
      return res.send(resultadoBusqueda);
    } else {
      return res.send(`No hay autos que cumplan con el criterio seleccionado. Modelo: ${modelo}, Año ${anio}`);
    }
  },
};

module.exports = productController;