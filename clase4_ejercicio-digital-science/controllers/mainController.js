const mainController = {
  index: function (req, res) {
    return res.render('home', { title: "Home - Digital Science",texto: 'Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.' });
  },
  creditos: function (req, res) {
    return res.render('creditos', {title: "Creditos - Digital Science", nombre: "Diego", texto: "Hecho con ❤️ en Programación 2."});
  }
};

module.exports = mainController;
