

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '',
    user: '',
    port: '',
    password: '',
    database: '',
    multipleStatements: true
});
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
setInterval(function() {
    conn.query('SELECT 1');
    console.log("数据库准备完成")
}, 5000);

module.exports = conn;