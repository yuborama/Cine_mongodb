
const express = require("express");
const router = express.Router();

const {
    CreateNewMovie, ReadMovie, UpdateMovie, DeleteMovie, AllMovies
} = require('../controllers/movie.controller')

router.post('/new_movie', CreateNewMovie);
router.get('/all_movies', AllMovies);
router.get('/movie/:id', ReadMovie);
router.post('/movie/:id', UpdateMovie);
router.post('/Delete_movie/:id', DeleteMovie);

module.exports = router;