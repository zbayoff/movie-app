const movies = require('./movies.controllers');

const movieRoutes = function(app) {
    app.get('/api/movie', movies.findAll);
    app.get('/api/movie/:id', movies.findById);
    
    app.post('/api/movie', movies.add);
    app.post('/api/searchMovies', movies.search);

    app.put('/api/movie/:id', movies.update);
    app.delete('/api/movie/:id', movies.delete);

    app.delete('/api/deleteall', movies.deleteall);
    
    app.get('/api/import', movies.import);
}

module.exports = movieRoutes;