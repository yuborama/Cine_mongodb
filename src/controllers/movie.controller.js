const moviectrl = {};
const movie = require("../models/movie");

moviectrl.CreateNewMovie = async (req, res) => {
  const { nombre, categoria, imagen, descripcion } = req.body;
  const NewMovie = new movie({ nombre, categoria, imagen, descripcion });
  await NewMovie.save();
  res.send("animals/registre_animal");
};

moviectrl.ReadMovie = async (req, res) => {
  res.send("mostrar pelicula");
};

moviectrl.UpdateMovie = async (req, res) => {
  const { nombre, categoria, imagen, descripcion } = req.body;
  await movie.findByIdAndUpdate(req.params.id, {
    nombre,
    categoria,
    imagen,
    descripcion,
  });
  res.send("modifico");
};

moviectrl.DeleteMovie = async (req, res) => {
  res.send("eliminando pelicula");
};

moviectrl.AllMovies = async (req, res) => {
    const peliculas = await movie.find().lean();
    console.log(peliculas)
    res.json({ peliculas })
};

moviectrl.CargarData = async (req, res) => {
  const peliculas = [
    {
      titulo: "Scary movie",
      categoria: "comedia",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg",
      descripcion:
        "Scary Movie es una película de terror de comedia estadounidense de 2000 dirigida por Keenen Ivory Wayans. La película parodia varios géneros, incluidos los géneros de películas de terror, slasher y misterio. Varias películas y programas de televisión de la década de 1990 también son falsificados, y el guión sigue principalmente la trama de las películas de terror Scream (1996) y Sé lo que hicisteis el último verano (1997). La película tiene críticas mixtas sobre Metacritic y recaudó $ 278 millones en todo el mundo con un presupuesto de $ 19 millones. La primera entrega de la franquicia Scary Movie, fue seguida por cuatro secuelas.",
    },
    {
      titulo: "Bad Boys for Life",
      categoria: "accion",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
      descripcion:
        "Bad Boys for Life es una película de comedia de acción estadounidense de 2020 que es la secuela de Bad Boys II (2003) y la tercera entrega de la trilogía Bad Boys. Will Smith y Martin Lawrence repiten sus papeles protagónicos en la película, que está dirigida por Adil & Bilall y escrita por Chris Bremner, Peter Craig y Joe Carnahan. El elenco de la película también incluye a Paola Núñez, Vanessa Hudgens, Alexander Ludwig, Charles Melton, Kate del Castillo, Nicky Jam y Joe Pantoliano. Fue producido por Smith, Jerry Bruckheimer y Doug Belgrad. En Bad Boys for Life, los detectives de Miami Mike Lowrey y Marcus Burnett investigan una serie de asesinatos relacionados con el turbulento pasado de Lowrey.",
    },
  ];
  i = 0;
  while (i < peliculas.length) {
    let pelicula = peliculas[i];
    titulo = pelicula.titulo;
    categoria = pelicula.categoria;
    imagen = pelicula.imagen;
    descripcion = pelicula.descripcion;
    const NewMovie = movie({ titulo, categoria, imagen, descripcion });
    await NewMovie.save()
    i++
  }
  res.send('data cargada')
};

module.exports = moviectrl;
