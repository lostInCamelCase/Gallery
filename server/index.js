const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js')
const model = require('../db/model.js')
const app = express();
const PORT = 3008;
const random = require('../db/infoGeneration.js');

app.use(bodyParser.json())
// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/stay',(req, res) => {
  model.getInfo((err, data) => {
    if (err) {
      // console.log('error getting data', err);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/stay/ratings',(req, res) => {
  var id = random.randomNum(1,100);
  model.getRatings(id,(err, data) => {
    if (err) {
      // console.log('error getting data', err);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/stay/pictures',(req, res) => {
  var id = random.randomNum(1,100);
  model.getPictures(id, (err, data) => {
    if (err) {
      // console.log('error getting data', err);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
})








// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));