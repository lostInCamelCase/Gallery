const db = require('./index.js');
// const random = require('./infoGeneration.js')

module.exports = {
  getInfo: (id, callback) => {
    // select name of stay where id is the stay id.
    db.query(`select * from placeToStay where id ="${id}"`, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getPictures: (id, callback) => {
    //  select all from pictures where stay_id = stay id
    db.query(`select * from pictures where stay_id ="${id}"`, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getRatings: (id, callback) => {
    //  select all from ratings where stay_id = stay id
    db.query(`select * from ratings where stay_id = "${id}"`, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
}
