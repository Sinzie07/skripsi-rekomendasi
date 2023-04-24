const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "skripsi",
});

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Something went wrong" });
    } else {
      res.send(results);
    }
  });
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  const sql = "INSERT INTO users (name) VALUES (?)";

  connection.query(sql, [name], (err, result) => {
    if (err) {
      res.status(500).send({ error: "Something went wrong" });
    } else {
      res.send({ id: result.insertId });
    }
  });
});

app.listen(3001, () => {
  console.log("Server is runnig on port 3001");
});
