//JavaScript File

$(document).ready(function(){
	console.log('connected');
	
	
	
	$('form').on('submit', function(){
		console.log('submiting...');
		let item = $('form input');
		let todo = {item: item.val()};
		console.log('todo');
		
		$.ajax({
			type: 'POST',
			url: '/todo/',
			data: todo,
			success: function(data){
//				some code to do something with the response
				location.reload();
			}
		});
		
	});
	
	
	
	
	
	$('li').on('click', function(){
		var id = $(this).attr('id');
		console.log("You Clicked " + id);
		$.ajax({
			type: 'DELETE',
			url: '/todo/' + id,
			//"data:"  is also used in these functions. Used for posting 
			success: function(data){
//				some code to do something with the response
				location.reload();
			}
		});
		
	});
	
	
});


