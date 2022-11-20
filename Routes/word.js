const express=require('express');
const router=express.Router();
const db=require('../database/db');

var con=db.con;
router.post("/",(req,res)=>{
    let data={
        id:req.body.id,
        ka:req.body.ka,
        kb:req.body.kb,
        kc:req.body.kc,
        kd:req.body.kd,
        ke:req.body.ke
    };
    console.log(data);
    data={
        id:2,
        k1:"ran",
        k2:"ran",
        k3:"ran",
        k4:"ran",
        k5:"ran"
    };

    let sql="INSERT INTO KEYWORD SET ?";
   
    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Keywords added!"}));
    }); 
});

module.exports=router