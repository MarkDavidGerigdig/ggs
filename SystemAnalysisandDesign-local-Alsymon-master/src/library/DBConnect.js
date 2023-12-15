const sequelize=require("sequelize")

function connectToDB(){
    const sequelize=new Sequelize("db_sad1","root","",{
        host:"localhost",
        dialect:"mysql"
    })

    sequelize.authenticate().then(()=>(
        console.log("Database successfully connected")
    )).catch((error)=>(
        console.error("DB connection failed",e)
    ))
}

exports.connectToDB=connectToDB