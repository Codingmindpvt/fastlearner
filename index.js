var express=require('express');
var app = express();

app.get('/',function(req,res)
{
    res.send("<h1>Hello world!</h1>");
});

var server = app.listen(4000,function()
{
    console.log("App running on 4000 ...");
});