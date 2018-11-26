const OmdbApi = require('omdb-api-pt')

const omdb = new OmdbApi({
    apiKey: 'ef5abb3c'
    //   baseUrl // The base url of omdb. Defaults to 'https://omdbapi.com/'.
});

function searchMovies(req, res, next) {

    omdb.bySearch({
            search: req.body.text,
            // type: 'series',
            // year: '2004',
            page: 1
        }).then(response => res.send(response))
        .catch(err => console.error(err))

}

module.exports = searchMovies;