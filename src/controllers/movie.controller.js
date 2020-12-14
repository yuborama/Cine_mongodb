const moviectrl = {};
const movie = require('../models/movie');

moviectrl.CreateNewMovie = async (req, res) => {
    const { nombre, categoria, imagen, descripcion } = req.body;
    const NewMovie = new movie({ nombre, categoria, imagen, descripcion })
    await NewMovie.save();
    res.send('animals/registre_animal')
}

moviectrl.ReadMovie = async (req,res) => {
    res.send('mostrar pelicula')
}

moviectrl.UpdateMovie = async (req,res) => {
    res.send('modificando pelicula')
}

moviectrl.DeleteMovie = async (req,res) => {
    res.send('eliminando pelicula')
}

moviectrl.AllMovies = async (req,res) => {
    res.send('mostrando peliculas')
}

module.exports = moviectrl;
