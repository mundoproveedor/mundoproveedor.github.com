// Posicionar menu
posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});
 
function posicionarMenu() {
    var altura_del_header = $('.header').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);
 
    if ($(window).scrollTop() >= altura_del_header){
        $('.header').addClass('fixed');
        $('.container').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.header').removeClass('fixed');
        $('.container').css('margin-top', '0');
    }
}

// Navbar
	$('.fa-bars').click(function(){
		$('.menu_movBar').addClass("show");
		$('.fa-times-circle').css("display","block");
		$('.fa-bars').css("display","none");
	});
		$('.fa-times-circle').click(function(){
		$('.menu_movBar').removeClass("show");
		$('.fa-bars').css("display","block");
		$('.fa-times-circle').css("display","none");
	});

// Anclas
	
