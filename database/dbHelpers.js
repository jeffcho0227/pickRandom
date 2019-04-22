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

const removeNameHelper = (id) => {
    return randomNameModel.deleteOne({_id: id});
}

module.exports = {
    findNameHelper, 
    addNameHelper,
    removeNameHelper
};