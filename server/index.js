const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "restaurant_database",
});

app.post("/create", (req, res) => {
    const first_name=req.body.first_name;
    const   last_name=req.body.last_name;
    const   Phone_number=req.body.Phone_number;
    const   Adress=req.body.Adress;
    const   Email=req.body.Email;
    const   Password=req.body.Password;
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

  db.query(
    "INSERT INTO users (first_name, last_name, Phone_number, Adress, Email,Password) VALUES (?,?,?,?,?,?)",
    [first_name, last_name, Phone_number, Adress, Email,Password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.listen(4060, () => {
  console.log("Yey, your server is running on port 3002");
});
