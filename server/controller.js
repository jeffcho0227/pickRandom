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

const removeName = (req, res) => {
    let {id} = req.params
    console.log(req.params);
    Helpers.removeNameHelper(id)
    .then(data => {
        res.status(204).send('data deleted')
    })
    .catch(err => console.error(err));
}

module.exports = {
    addName, 
    findName,
    removeName,
}