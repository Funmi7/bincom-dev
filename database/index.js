const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 50,
  user: "root",
  database: "bincom_test",
  host: "localhost",
  port: "3306"
});

let bincomdb = {};

bincomdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM agentname", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = bincomdb;