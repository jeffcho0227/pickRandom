const express = require('express');
const Router = express.Router();
const controller = require('./controller.js');

Router
.route('/list')
.get(controller.findName);

Router
.route('/createName')
.post(controller.addName)

Router
.route('/:id')
.delete(controller.removeName)

module.exports = Router;
