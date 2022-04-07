const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
const db=require("./models");
const {User} = require('./models');

app.get("/select",(req,res)=>{
  User.findAll().then((users1)=>{
    res.send(users1)
  })  
})
app.post("/create", (req, res) => {
  User.create({
     first_name:req.body.first_name,
       last_name:req.body.last_name,
       Phone_number:req.body.Phone_number,
       Adress:req.body.Adress,
       Email:req.body.Email,
       Password:req.body.Password

  }).catch((err)=>{
    if(err)
    console.log(err);
  })
  res.send("insert")

})


port=4060
db.sequelize.sync().then((req)=>{
app.listen(port, () => {
  console.log("Server is running on port",port);
})});