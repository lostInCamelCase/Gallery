var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor',
  database: 'gallery'
})

connection.connect( (err) => {
  if (err) {
    console.log('error connecting to db')
  } else {
    console.log('connected to db')
  }
})

module.exports = connection;