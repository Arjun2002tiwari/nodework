const express=require('express');
const router=express.Router();
const db=require('../database/db');
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var con=db.con;
router.post("/",(req,res)=>{
    let data={
        id:req.body.id,
        k1:req.body.k1,
        k2:req.body.k2,
        k3:req.body.k3,
        k4:req.body.k4,
        k5:req.body.k5
    };
    console.log(data);
    
    let sql="INSERT INTO KEYWORD SET ?";
   
    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Keywords added!"}));
    }); 
});

module.exports=router