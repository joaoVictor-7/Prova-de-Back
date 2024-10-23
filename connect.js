const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('Connected to the MySQL database.');
});
module.exports = {con};