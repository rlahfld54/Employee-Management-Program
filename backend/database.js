const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "아이디",
  password: "비밀번호",
  database: "finshot",
});
connection.connect();

module.exports = connection;
