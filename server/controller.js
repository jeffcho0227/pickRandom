const Helpers = require('../database/dbHelpers.js');

const addName = (req, res) => {
    Helpers.findName(req.body)
        .then(data => {
            res.status(200).send('data added');
        })
        .catch(err => {
            console.error(err);
        });
};

const findName = () => {
    Helpers.findName(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.error(err)
        })
}