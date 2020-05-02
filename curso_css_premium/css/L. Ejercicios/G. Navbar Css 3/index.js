var modal = $('#modal');
$(function(){
	$('img').click(function(){
		var idImg = $(this).attr("id");
		console.log(idImg);
		var srcImg = $(this).attr("src");
		console.log(srcImg);
		showModal(idImg,srcImg);
	});
	hideModal();

	// Navbar
	$('.fa-bars').click(function(){
		$('nav ul li').addClass("show");
		$('.fa-times-circle').css("display","block");
		$('.fa-bars').css("display","none");
	});
		$('.fa-times-circle').click(function(){
		$('nav ul li').removeClass("show");
		$('.fa-bars').css("display","block");
		$('.fa-times-circle').css("display","none");
	});
});
function showModal(idImg,srcImg){
		var imagen = idImg;
		var src = srcImg;
		$('#imgModal').attr("src",srcImg);
		modal.css("display", "block");
	}
function hideModal(){
		$('.cerrar').click(function(){
			modal.css("display","none");
		});
	}
