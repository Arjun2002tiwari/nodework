const express=require('express');
const router=express.Router();
const db=require('../database/db');
const app=require('../app');



var con=db.con;
//var port=app.port;


router.post("/",(req,res)=>{
    let data={name:req.body.name,username:req.body.username};

    let sql="INSERT INTO USER SET ?";

    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"new user added!"}));
    });
});

router.get("/",(req,res)=>{
    con.query("SELECT * FROM USER",(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})



module.exports=router