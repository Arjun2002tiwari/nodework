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
    con.query("SELECT * FROM USER",(err,result)=>{
        if(err) throw err;
        var row;
        Object.keys(result).forEach(function(key) {
             row = result[key];
          });
        res.send(`http://localhost:8000/api/profile/${row.images}`);
    })
})
 

module.exports=router