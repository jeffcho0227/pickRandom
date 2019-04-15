const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/randomName', {useNewUrlParser: true});

mongoose.promise = global.promise;

const randomNameSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
});

const randomNameModel = mongoose.model('randomNameModel', randomNameSchema);

module.exports = randomNameModel;

