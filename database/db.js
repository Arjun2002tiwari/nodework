var mysql=require('mysql');

var con = mysql.createConnection({
  host: "epatrakaar.cbd9pnrwasw2.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "epatrakaar1234",
  database: "epatrakaar",
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
