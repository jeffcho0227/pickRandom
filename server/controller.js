const Helpers = require('../database/dbHelpers.js');

const addName = (req, res) => {
    console.log(req.body);
    Helpers.addNameHelper(req.body)
        .then(data => {
            res.status(200).send('data added');
        })
        .catch(err => {
            console.error(err);
        });
};

const findName = (req, res) => {
    Helpers.findNameHelper({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports = {
    addName, 
    findName,
}