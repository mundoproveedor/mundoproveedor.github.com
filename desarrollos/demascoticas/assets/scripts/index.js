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
		$('.fa-times-circle').css("display","inline");
		$('.fa-bars').css("display","none");
	});
		$('.fa-times-circle').click(function(){
		$('.menu_movBar').removeClass("show");
		$('.fa-bars').css("display","inline");
		$('.fa-times-circle').css("display","none");
	});

// Carrousel
	
var current = 0;
var imagenes = new Array();
 
$(document).ready(function() {
    var numImages = 15;
    if (numImages <= 5) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }
 
    $('.left-arrow').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 5;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
 
        return false;
    });
 
    $('.left-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('click', function() {
        if (numImages > current + 5) {
            current = current+1;
        } else {
            current = 0;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
 
        return false;
    }); 
 });