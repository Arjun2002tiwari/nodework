const express=require('express');
const router=express.Router();
const db=require('../database/db');

var con=db.con;
router.post("/",(req,res)=>{
    let data={name:req.body.name};
    console.log(data);
    
    let sql="INSERT INTO CHECK SET ?";
   
    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Keywords added!"}));
    }); 
});

module.exports=router