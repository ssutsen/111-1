var mysql=require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"babe96857411",
});

con.connect(function(err){
    if(err) throw err;
    console.log("connect!");
});