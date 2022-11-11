var mysql=require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "udyqLKxWAd",
  password: "ykuYINn0Ra",
  database: "udyqLKxWAd"
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
