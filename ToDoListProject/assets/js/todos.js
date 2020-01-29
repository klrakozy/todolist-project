// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding new input to Todo List
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

//Click icon to hide input box
$("#toggle-icon").click(function(){
	$("input[type='text']").fadeToggle();
});