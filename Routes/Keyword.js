const express=require('express');
const router=express.Router();
const db=require('../database/db');
const key=require('../Routes/News-upload');

//var id=;
router.post("/",(req,res)=>{
    let data={username:req.body.username,id:req.body.id};
    console.log(data.username);
    //data={username:"arjun754",id:1};

    let sql="INSERT INTO COLLECTIONS SET ?";
   
    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Collections added!"}));
    }); 
});
 

module.exports=router