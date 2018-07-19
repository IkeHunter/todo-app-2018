
module.exports = function(mysql){
// db connection
	const db = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
  		password : 'Password@1234',
  		database : 'todo'
	});

//connect to server
	db.connect(function(err){
		if (err){
			throw err;
		}
		console.log('mySQL is connected');
	});
	
	return db;
}

