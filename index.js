var express=require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine','ejs');

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs',
});

//check connection
conn.connect(function(err)
{
    if(err) throw err;
    console.log("connection successfully!!")
})

app.get('/',function(req,res)
{
    // res.send("<h1>Hello world!</h1>");
    res.render('insert');
});

app.post('/insert',function(req,res)
{
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `insert into users(user_name,user_email,user_password) values('${name}','${email}','${password}')`;
    conn.query(sql,function(err,results)
    {
        if(err) throw err;
        res.send("<h1>Data send</h1>")
        });
});

var server = app.listen(4000,function()
{
    console.log("App running on 4000 ...");
});