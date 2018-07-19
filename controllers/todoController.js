// JavaScript Document

//var data = [{item: 'eat'}, {item: 'sleep'}, {item: 'code'}, {item: 'get milk'}, {item: 'make bed'}, {item: 'create app'}];

const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extended: false});


module.exports = function(app, db){
	
//	CRUD - Creat Read Update Destroy
//  crud is the basis of all applications
//  Update will not be included in this application
	
	app.get('/',function(req, res){
		//read
		console.log('Read');
		let sql = 'select * from todoItems';
		db.query(sql, (err, results) => {
			if(err) throw err;
			console.log(results);
			res.render('todo', {todos: results});
		});
	});
		
	
	
	app.post('/todo', urlencodeParser, function(req, res){
		//create
		console.log('Create');
		let item = req.body;
		console.log(item);
		let sql ='insert into todoItems SET ?';
		let query = db.query(sql, item, (err, result) =>{
			if (err) throw err;
			console.log(result);
			res.json(result);
		});
		
	});
	
	app.delete('/todo/:id',function(req, res){
		//delete   
		console.log('Delete');
		let item = req.body;
		console.log(req.params.item);
		let sql =`delete from todoItems where id = ${req.params.id}`;
		
		let query = db.query(sql, item, (err, result) =>{
			if (err) throw err;
			console.log(result);
			res.json(result);
		});
		//filters data from the array
//		data = data.filter(function(todo){
//			return todo.item.replace(/ /g, '-') !== req.params.item ; 
//		});
	});
	
	
};




