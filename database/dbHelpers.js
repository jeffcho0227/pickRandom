const randomNameModel = require('./index.js');

const findNameHelper = () => {
    return randomNameModel.find();
}

const addNameHelper = ({firstName, lastName}) => {
    return randomNameModel.create({
        firstName: firstName,
        lastName: lastName
    });
}

const removeNameHelper = ({firstName, lastName}) => {
    return randomNameModel.deleteOne({firstName, lastName});
}

module.exports = {
    findNameHelper, 
    addNameHelper,
    removeNameHelper
};