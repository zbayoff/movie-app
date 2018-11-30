const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

exports.findAll = function (req, res) {
    Movie.find({}, function (err, results) {
        return res.send(results);
    });
};

exports.findById = function (req, res) {
    const id = req.params.id;
    Movie.findOne({
        '_id': id
    }, function (err, result) {
        return res.send(result);
    });
};

exports.add = function (req, res) {
    Movie.create(req.body, function (err, movie) {
        if (err) return console.log(err);
        return res.send(movie);
    });
};


exports.update = function (req, res) {

    console.log('helooooo')
    const id = req.params.id;
    const updates = req.body;

    console.log('id');

    Movie.updateOne({
            '_id': id
        }, updates,
        function (err) {
            if (err) return console.log(err);
            return res.sendStatus(202);
        });
};


exports.delete = function (req, res) {
    let id = req.params.id
    Movie.remove({
        '_id': id
    }, function (result) {
        return res.send(result)
    })
};

exports.import = function (req, res) {
    // Recipe below refers to the mongoose schema. create() is a mongoose method
    Movie.create({
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4MDYzNDE1OV5BMl5BanBnXkFtZTcwNDY2OTYwNA@@._V1_SX300.jpg",
            "Title": "Saw",
            "Type": "movie",
            "Year": "2004",
            "imdbID": "tt0387564",
            "watched_status": true,
            "date_added": "2018-01-01T15:00:00.000Z"
        },
        function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};

exports.deleteall = function (req, res) {

    Movie.deleteMany({}, function (result) {
        console.log('DELETEING')
        return res.send(result)
    })
};