var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',     
  password: '12345',  
  database: 'mydb' 
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  
});
module.exports = conn;
