const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    Poster: String,
    Title: String,
    Type: String,
    Year: String,
    imdbID: String,
    watched_status: Boolean,
    date_added: Date
});

module.exports = mongoose.model('Movie', MovieSchema);