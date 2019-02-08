$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click",".icon",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})

$("input[type = 'text']").on("keypress",function(event){
	if(event.which === 13){
		var t = $(this).val();
		$("ul").append("<li><span class = 'icon'><i class='far fa-trash-alt'></i></span>"+t+"</li>");
		$(this).val("");
	}
})

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})