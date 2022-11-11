var mysql=require('mysql');

var con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12561791",
  password: "pzV3RjmrRg",
  database: "sql12561791"
  // host:"localhost",
  // user:"root",
  // password:"123456",
  // database:"eptrakaar"
});


const mysqlConnect=()=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected!");
      });
}

module.exports={mysqlConnect,con};
