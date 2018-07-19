// JavaScript Document
const express         = require('express');
const app             = express();
const session         = require('express-session');
const bodyParser      = require('body-parser');
const env             = require('dotenv').load()
const mysql           = require('mysql');
const todoController  = require('./controllers/todoController');
const myDatabase      = require('./db');
const passport        = require('passport')
const flash           = require('connect-flash');


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard mango',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

//Models
var models = require("./models");

//load passport strategies
require('./config/passport/passport.js')(passport,models.user);

//setting template engine
app.set('view engine', 'ejs');

//static file management
app.use(express.static('./public'));

//linking files

todoController(app, myDatabase(mysql), passport);

//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});

//listening
app.listen(3000);
console.log('You are listening to port 3000');
