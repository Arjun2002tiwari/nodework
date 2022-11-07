const express=require('express');
const router=express.Router();
const db=require('../database/db');
const app=require('../app');



var con=db.con;
//var port=app.port;


router.post("/",(req,res)=>{
    let data={name:req.body.name,username:req.body.username,collections:'{"collect":[]}'};

    let sql="INSERT INTO USER SET ?";

    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"new user added!"}));
    });
});

router.get("/",(req,res)=>{
    con.query("SELECT * FROM USER",(err,result)=>{
        if(err) throw err;
        var row;
        Object.keys(result).forEach(function(key) {
             row = result[key];
          });
        res.send(`https://enews-api.herokuapp.com/api/profile/${row.images}`);
    })
})



module.exports=router