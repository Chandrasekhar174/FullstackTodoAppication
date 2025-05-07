const express=require('express');
const db=require('../config/db');
const auth=require('../middleware/authMiddleware');
const router=express.Router();


router.get('/',auth,(req,res)=>{
    db.query("select * from todos where user_id=?",[req.user.id],(err,result)=>{
        if(err){
            return res.status(500).json({error:err});
        }
        res.json(result);
    })
})

router.post('/',auth,(req,res)=>{
    const {title}=req.body;
    db.query('insert into todos(user_id,title) values(?,?)',[req.user.id,title],(err,result)=>{
        if(err){
            return res.status(500).json({error:err});
        }
        res.status(201).json({message:'Todo added'});
    });
});
router.delete('/:id',auth,(req,res)=>{
    db.query("delete from todos where id=? and user_id=?",[req.params.id,req.user.id],(err,result)=>{
        if(err){
            res.status(500).json({error:err});
        }
        res.json({message:"Todo deleted"});
    });
});

module.exports=router;