var mysql=require('mysql');

var con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12541828",
  password: "8VLmAz7X7b",
  database: "sql12541828"
});


const mysqlConnect=()=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected!");
      });
}

module.exports={mysqlConnect,con};
