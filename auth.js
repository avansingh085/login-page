var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '12345',      // Replace with your database password
  database: 'mydb' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  //console.log('Database is connected successfully !');
});

// conn.query("select*from avan",(err,res)=>{
//     if(err)
//     throw err;
// console.log(res);
// })
module.exports = conn;