const science = require('../db/science');

const lista = science.lista;

const heroeController = {
  index: function (req, res) {
    return res.render('heroes', { title: "Heroes", lista: lista });
  },
  detalle: function (req, res) {
    let heroe;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id == req.params.id) {
        heroe = lista[i];
      }
    }

    return res.render('detalle', { title: "Detalle Heroe", heroe: heroe });
  },
  bio: function (req, res) {
    let heroe;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id == req.params.id) {
        heroe = lista[i];
      }
    }

    if (req.params.ok == "ok") {
      return res.render('bio', { title: "Bio Heroe", heroe: heroe, ok: true });
    } else {
      return res.render('bio', { title: "Bio Heroe", heroe: heroe, ok: false });
    }
  }
};

module.exports = heroeController;
