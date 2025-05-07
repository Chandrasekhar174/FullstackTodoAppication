const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ratnakar@8342',
    database:'todo_app'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected.....");

    
});

module.exports=connection;