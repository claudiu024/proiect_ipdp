module.exports=(sequelize,DataTypes)=>{
const User=sequelize.define("User",{
   
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
   
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true}
    },
  
    Phone_number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:true}
    },
      Adress:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true}
    },Email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true}
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
    }}

}   )
return User;
}