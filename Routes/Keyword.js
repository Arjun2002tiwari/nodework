const express=require('express');
const router=express.Router();
const db=require('../database/db');
const key=require('../Routes/News-upload');


var con=db.con;
var id=key.idNumber;


router.post("/",(req,res)=>{
    
    let data={
        id:id,
        k1:req.body.k1,
        k2:req.body.k2,
        k3:req.body.k3,
        k4:req.body.k4,
        k5:req.body.k5
    }

    let sql="INSERT INTO KEYWORD SET ?";
   
    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"keywords added!"}));
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