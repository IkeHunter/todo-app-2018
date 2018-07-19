// JavaScript Document
const express = require('express');
const app = express();
const mysql = require('mysql');
const todoController = require('./controllers/todoController');
const myDatabase = require('./db');


//setting template engine
app.set('view engine', 'ejs');

//static file management
app.use(express.static('./public'));

//linking files

todoController(app, myDatabase(mysql));

//listening
app.listen(5000);
console.log('You are listening to port 5000');

