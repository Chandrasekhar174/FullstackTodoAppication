const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:' sql12.freesqldatabase.com',
    user:'sql12777368',
    password:'l8Yd7MpyZj',
    database:'sql12777368'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected.....");

    
});

module.exports=connection;
