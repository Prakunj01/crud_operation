'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'prakunj01',
  database : 'assignment_crud'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});
module.exports = dbConn;