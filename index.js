
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db=require('./auth.js');
const { readFile, readFileSync } = require('fs');
 
var app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ 
    secret: '123456catr',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());
 app.post('/getData',(req,res)=>{
 let email=req.body.email;
 let password=req.body.password;
 var check=0;
    db.query(`select Email from Login where passwords='${password}'`,async (err,result)=>{
    if(err)
    throw err;
    check=result.length;
   if(check<=0)
   {
    db.query(`insert into Login (Email,Passwords) values('${email}','${password}')`,(err,result)=>{
    if(err)
    throw err;
    console.log("you have login succesfully");
  });
}
else
{
  
console.log("you have alredey login");
}
    });
res.redirect('/login');
 })
 app.get('/login',(req,res)=>{
 res.sendFile(__dirname+'/index.html')
 })
app.listen(3000);
