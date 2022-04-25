const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
const db=require("./models");
const {User} = require('./models');
const port=3001;
app.get("/select",(req,res)=>{
  User.findAll().then((users)=>{
    res.send(users)
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

app.post("/verify-login", (req, res) => {
  
  User.findAll({where:{Email:req.body.Email,Password:req.body.Password}}).then((users)=>{
      //  Email:req.body.Email,
      //  Password:req.body.Password
      if (users.length!==0){
      res.send(users)
      console.log("user GASIT")
      }else res.status(404).send('Sorry, cant find that');
  })
})



db.sequelize.sync().then((req)=>{
app.listen(port, () => {
  console.log("Server is running on port",port);
})});