const randomNameModel = require('./index.js');

const findName = () => {
    return randomNameModel.find();
}

const addName = ({firstName, lastName}) => {
    return randomNameModel.create({
        firstName: firstName,
        lastName: lastName
    });
}

const removeName = ({firstName, lastName}) => {
    return randomNameModel.deleteOne({firstName, lastName});
}

module.exports = {
    findName, 
    addName,
    removeName
};