const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const model = require('../db/model.js');
const random = require('../db/infoGeneration.js');
const app = express();
const PORT = 3008;

let stayId = 0;
app.use(bodyParser.json());
// Serve static files.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/stay', (req, res) => {
  stayId = random.randomNum(1, 100);
  model.getInfo(stayId, (err, data) => {
    if (err) {
      console.log('error getting data');
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/stay/ratings', (req, res) => {
  // const id = random.randomNum(1, 100);
  model.getRatings(stayId, (err, data) => {
    if (err) {
      // console.log('error getting data', err);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/stay/pictures', (req, res) => {
  // const id = random.randomNum(1, 100);
  model.getPictures(stayId, (err, data) => {
    if (err) {
      // console.log('error getting data', err);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  });
});
// Start the server on the provided port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
