const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const db=require('../config/db');
require('dotenv').config();


const router=express.Router();

router.post('/signup',async (req,res)=>{
    const {username,email,password}=req.body;
    const hashed=await bcrypt.hash(password,10);
    db.query("select * from users where email=?",[email],(err,result)=>{
        if(result.length>0){
            return res.status(401).json({error:"User already exists please LogIn"});
        }
        db.query("insert into users(username,email,userpassword) values(?,?,?)",[username,email,hashed],(err,result)=>{
            if(err){
                return res.status(500).json({error:err});
            }
            res.status(201).json({message:"User created successfully"});
        })
    })
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    db.query("select * from users where email=?",[email],async(err,result)=>{
        if(err || result.length===0){
            return res.status(401).json({error:"Invalid email"});
        }
        const user=result[0];   
        // console.log(user);
        const match=await bcrypt.compare(password,user.userpassword);

        if(!match){
            return res.status(401).json({error:"Invalid password"});    

        }
        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    });
});

module.exports=router;
