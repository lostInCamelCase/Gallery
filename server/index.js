const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js')
const app = express();
const PORT = 3008;

app.use(bodyParser.json())
// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));










// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));