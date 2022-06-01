
// import { Logger } from './Logger.js'
const express = require("express");
const app = express();
const L=require("./Logger.js")
const cors = require("cors");
const Logger=L.getloger();
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

  }
  ).then(
    Logger.info("The user was registred sucesfully")
  ).catch((err)=>{
    if(err)
    console.log(err);
  })
  res.send("insert")

})

app.post("/verify-login", (req, res) => {
  
  User.findOne({where:{Email:req.body.Email,Password:req.body.Password}}).then((user)=>{
      //  Email:req.body.Email,
      //  Password:req.body.Password
      if (user.length!==0){
      res.send(user)
      Logger.info("The user was verified")
      // console.log("user GASIT")
      }else {res.status(404).send('Sorry, cant find that')
      Logger.error("Error on log in")};
  })
})



db.sequelize.sync().then((req)=>{
app.listen(port, () => {

  Logger.info("Server is running on port",port);
})});