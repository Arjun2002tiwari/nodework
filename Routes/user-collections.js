const express=require('express');
const router=express.Router();
const db=require('../database/db');



var con=db.con;


router.post("/",(req,res)=>{
   
    con.query(`UPDATE USER
    SET collections=JSON_SET(collections, "$.collect[0]","${req.body.collections}") 
    WHERE username="${req.body.username}"`,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Collections added!"}));
    }); 
});

router.get("/",(req,res)=>{
    if(req.query.username!=undefined)
    con.query(`SELECT collections FROM USER WHERE username="${req.query.username}"`,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    else{
        con.query(`SELECT collections FROM USER`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }
})
 

module.exports=router