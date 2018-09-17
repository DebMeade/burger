var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kiscp9z45gw2jgj0",
  password: "zr3zq73zq6rz3ent",
  database: "c62vdwpzs3sb9otl"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;