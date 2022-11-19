var mysql=require('mysql');

var con = mysql.createConnection({
  host: "epatrakaar.cbd9pnrwasw2.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  port:3306,
  password: "epatrakaar1234",
  database: "epatrakaar",
  //host:"127.0.0.1",
  //user:"root",
  //port:3306,
  //password:"root",
  //database:"ep"
});


const mysqlConnect=()=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected!");
      });
}

module.exports={mysqlConnect,con};
