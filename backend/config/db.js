const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'sql12.freesqldatabase.com',
    user:'sql12779130',
    password:'piXZgkKttE',
    database:'sql12777368'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected.....");

    
});

module.exports=connection;
