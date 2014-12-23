$(document).ready(function(e) {
    $("#main-grid div").mouseenter(function(){
			$(this).fadeTo('fast',0.6);
		});
	$("#main-grid div").mouseleave(function(){
			$(this).fadeTo('fast',1);
		});
	$("#left-scroll").mousemove(function(){
			$("#main-grid").animate({right:'+=50'});
		});
		$("#right-scroll").mousemove(function(){
			$("#main-grid").animate({left:'+=50'});
		});
});