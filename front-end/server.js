const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const searchMovies = require('./controllers/searchMovies');

const port = 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req,res,next) => {
    console.log('Request URL: ', req.originalUrl);
    console.log('Request Type: ', req.method);
    next();
});

app.use(express.static(path.join(__dirname, './public')));

app.post('/searchMovies', searchMovies);

// app.post('/movies', movies.add);

app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
