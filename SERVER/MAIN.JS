const { Pool } = require("pg");
const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});


const getUsers = function () {
  const sql = "select * from users";
  pool.query(sql)
    .then(data => {
      console.log("then 1:", data.rows);
      return data.rows;
    })
    .then(data => {
      console.log("then 2:", data);
      return data;
    })
    .catch(err => console.log(err));