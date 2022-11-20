const db=require('./database/db');
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const multer=require("multer");
const path=require("path");





db.mysqlConnect();
var con=db.con;

app.listen(port,()=>{
    console.log("server started at..."+port);
});

app.get('/',(req,res)=>{
    res.send("app is working fine!");
})

app.use('/api/upload-profile',require('./Routes/user-profile'));
app.use('/api/create',require('./Routes/user-create'));
app.use('/api/upload-collections',require('./Routes/user-collections'));
app.use('/api/profile',express.static('./upload/images'));

app.use('/api/news',express.static('./NewsImages/images'));
app.use('/api/news-route',require('./Routes/News-upload'));
app.use('/api/keywords',require('./Routes/word'));
module.exports={port};





