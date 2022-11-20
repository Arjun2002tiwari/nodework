const express=require('express');
const router=express.Router();
const db=require('../database/db');



var con=db.con;

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

router.get("/",(req,res)=>{
    if(req.query.username!=undefined)
    con.query(`SELECT id FROM COLLECTIONS WHERE username="${req.query.username}"`,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    else{
        con.query(`SELECT * FROM COLLECTIONS`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        }) 
    }
})
 

module.exports=router