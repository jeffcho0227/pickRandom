const express = require('express');
const parser =  require('body-parser');

const path = require('path');
const app = express();
const port = 3000;

app.use(parser.json({extend: true}));

app.listen(port, console.log(`listen on port ${port}`));