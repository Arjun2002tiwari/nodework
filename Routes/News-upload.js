const express=require('express');
const router=express.Router();
const multer=require("multer");
const path=require("path");
const db=require('../database/db');
const app=require('../app'); 

const storage=multer.diskStorage({
    destination:'./NewsImages/images',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${path.extname(file.originalname)}`)
    },
})

var con=db.con;
var port=app.port.toString();

const upload=multer({
    storage:storage,
})

var idNumber=1;
router.post("/",upload.single('news'),(req,res)=>{

    
    // res.json({
    //     success:1,
    //     profile_url:`http://localhost:8000/api/news/${req.file.filename}`
    // })
    idNumber=idNumber+1;
    var d = new Date();
    let data={id:idNumber,discription:req.body.discription,article:req.body.article,image:req.file.filename,category:req.body.category,source:req.body.source,time:d};
    let sql="INSERT INTO NEWS SET ?";

    con.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"news added into database!",id:idNumber}));
    });
})
router.get("/",(req,res)=>{
    if(req.query.id==undefined && req.query.category==undefined){
        con.query("SELECT * FROM NEWS",(err,result)=>{
            if(err) throw err;
            var i=0;
            console.log(result.length);
            for(i=0;i<result.length;i++){
                result[i].image=`${app.port}api/news/${result[i].image}`;
                console.log(result[i]);
            }
            res.send(result);
        });
    }
    else if(req.query.id!=undefined && req.query.category==undefined){
        con.query(`SELECT * FROM NEWS WHERE id=${req.query.id}`,(err,result)=>{
            if(err) throw err;
            var i=0;
            for(i=0;i<result.length;i++){
                result[i].image=`http://localhost:8000/api/news/${result[i].image}`;
                console.log(result[i]);
            }
            res.send(result);
        }); 
    }
    else if(req.query.id==undefined && req.query.category!=undefined){
        con.query(`SELECT * FROM NEWS WHERE category="${req.query.category}"`,(err,result)=>{
            if(err) throw err;
            var i=0;
            for(i=0;i<result.length;i++){
                result[i].image=`http://localhost:8000/api/news/${result[i].image}`;
                console.log(result[i]);
            }
            res.send(result);
        }); 
    }
})


module.exports=router