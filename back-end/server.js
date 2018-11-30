const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.database, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request URL: ', req.originalUrl);
    console.log('Request Type: ', req.method);
    next();
});

const movieModels = require('./src/movies.model'); 
const routes = require('./src/movies.routes');
const appRoutes = routes(app);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));