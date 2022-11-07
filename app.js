const db=require('./database/db');
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=process.env.PORT || 8000;

const multer=require("multer");
const path=require("path");

app.use(bodyParser.json());


db.mysqlConnect();
var con=db.con;

app.listen(port,()=>{
    console.log("server started at..."+port);
});

app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.use('/api/upload-profile',require('./Routes/user-profile'));
app.use('/api/create',require('./Routes/user-create'));
app.use('/api/upload-collections',require('./Routes/user-collections'));
app.use('/api/profile',express.static('./upload/images'));

app.use('/api/news',express.static('./NewsImages/images'));
app.use('/api/news-route',require('./Routes/News-upload'));


module.exports={port};




