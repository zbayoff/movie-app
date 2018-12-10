const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const searchMovies = require('./controllers/searchMovies');
const request = require('request');

const port = 4200;

const db_URI = 'http://localhost:3000/api/movie';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request URL: ', req.originalUrl);
    console.log('Request Type: ', req.method);
    next();
});

app.use(express.static('public'));
console.log(path.join(__dirname, 'public'));

app.post('/searchMovies', searchMovies);
app.get('/movie', (req, res) => {

    request(`${db_URI}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(JSON.stringify(body));
            res.send(body);
        } else {
            res.sendStatus(404);
        }
    });

    // request(`${db_URI}`, (error, response, body) => {
    //     if (error) { return console.log(error); }
    //     res.send(body);

    //     console.log(body);
    //   });


});


// app.post('/movies', movies.add);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));