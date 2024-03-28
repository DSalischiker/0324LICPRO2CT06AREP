const autos = require('../db/index.js');

const productController = {
  index: function(req, res) {
    let lista = autos.lista;
    return res.render('autos', {
      resultado: lista,
      titulo: "Todos los autos disponibles",
    });
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
      return res.render('autos', {
        resultado: resultadoBusqueda,
        titulo: `Autos ${marca}`
      });
    } else {
      return res.render('autos', {
        resultado: [],
        titulo: `No hay autos de marca ${marca}.`
      });
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
      return res.render('autos', {
        resultado: resultadoBusqueda,
        titulo: `Autos de color ${color}`
      });
    } else {
      return res.render('autos', {
        resultado: [],
        titulo: `No hay autos de color ${color}.`
      });
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
      return res.render('autos', {
        resultado: resultadoBusqueda,
        titulo: `Autos del año ${anio}`
      });
    } else {
      return res.render('autos', {
        resultado: [],
        titulo: `No hay autos del año ${anio}.`
      });
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
      return res.render('autos', {
        resultado: resultadoBusqueda,
        titulo: `Autos modelo ${modelo}`
      });
    } else {
      return res.render('autos', {
        resultado: [],
        titulo: `No hay autos de modelo ${modelo}.`
      });
    }
  },
};

module.exports = productController;