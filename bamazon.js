var mysql = require("mysql");

var connection = mysql.createconnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1Lovefilm",
    database: "bamazon"
});

function readProducts() {
    connection.query("SELECT ID FROM bamazon", function(err, res) {
        if (err){
            connection.end();
            throw err;
        }
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}