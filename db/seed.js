const db = require('./index.js');
const random = require('./infoGeneration.js');

const insertInfo = () => {
  for (let i = 1; i < 101; i++) {
    const placeName = random.randomListingName();
    const location = random.randomLocation();
    db.query(`insert into placeToStay (placeName, location) values ("${placeName}", "${location}")`, (err) => {
      if (err) {
        console.log('error insert data into db');
      }
    });
  }
};

const insertRating = () => {
  for (let i = 1; i < 101; i++) {
    const reviews = random.randomNum(10, 388);
    const stars = random.randomNum(3, 5);
    const host = random.superHost();
    db.query(`insert into ratings (number_Of_Reviews, stars, stay_id, superHost) values ("${reviews}", "${stars}","${i}", "${host}")`, (err) => {
      if (err) {
        console.log('error insert data into db', err);
      }
    });
  }
};

const insertPictures = () => {
  for (let i = 1; i < 101; i++) {
    const randomNumberOfPictures = random.randomNum(10, 35);
    for (let j = 0; j < randomNumberOfPictures; j++) {
      const picture = random.randomPictures();
      const caption = random.randomCaptions();
      db.query(`insert into pictures (images, caption, stay_id) values ("${picture}", "${caption}", "${i}")`, (err) => {
        if (err) {
          console.log('error insert data into db', err);
        }
      });
    }
  }
};

insertInfo();
insertRating();
insertPictures();
