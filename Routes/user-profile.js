const express=require('express');
const router=express.Router();
const multer=require("multer");
const path=require("path");
const db=require('../database/db'); 

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${req.body.username}_${Date.now()}${path.extname(file.originalname)}`)
    },
})

var con=db.con;
const upload=multer({
    storage:storage,
})
router.post("/",upload.single('profile'),(req,res)=>{

    
    // res.json({
    //     success:1,
    //     profile_url:`http://localhost:8000/api/profile/${req.file.filename}`
    // })
    let data=req.file.filename;
    console.log(data);

    // let sql=`INSERT INTO USER(name,username,images) VALUES("arjun tiwari","arjun754","arjun754_1666243272200.png")`;

    con.query(`UPDATE USER SET images="${data}" WHERE username="${req.body.username}"`,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"image added!"}));
    });
})

router.get("/",(req,res)=>{
    con.query("SELECT images FROM USER",(err,result)=>{
        if(err) throw err;
        res
    })
})

module.exports=router