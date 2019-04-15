const randomNameModel = require('./index.js');

const dummyData = [
    {firstName: 'Jeff', lastName: 'Cho'},
    {firstName: 'Jessica', lastName: 'Cho'},
    {firstName: 'Renee', lastName: 'Gu'}
]

randomNameModel.create(dummyData)
    .then(console.log('seeded'));