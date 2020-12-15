const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4001);


app.use(require('./routes/movie.routes'));


module.exports = app;