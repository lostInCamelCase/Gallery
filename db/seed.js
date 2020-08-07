const db =  require('./index.js');
const random = require('./infoGeneration.js');

const insertInfo = () => {
  // console.log(`${placeName},${rating},${host},${location}`)
  for (var i = 1; i < 101; i++) {
    var placeName = random.randomListingName();
    var host = random.superHost();
    var location = random.randomLocation();
    db.query(`insert into placeToStay (placeName, location) values ("${placeName}", "${location}")`, (err) => {
      if (err) {
        console.log('error insert data into db');
      }
    })
  }
};

const insertRating = () => {
  for (var i = 1; i < 101; i++) {
    var reviews = random.randomNum(10,388);
    var stars = random.randomNum(3,5);
    var host = random.superHost();
    db.query(`insert into ratings (number_Of_Reviews, stars, stay_id, superHost) values ("${reviews}", "${stars}","${i}", "${host}")`, (err) => {
      if (err) {
        console.log('error insert data into db', err);
      }
    })
  }
};

const insertPictures = () => {
  db.query()
};

insertInfo();
insertRating();