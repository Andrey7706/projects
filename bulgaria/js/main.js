/* переход по якорям */
$(document).ready(function(){
    $("a[href*=#]").on("click", function(){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        return false;
    });
});

/* всплывающее окно */
$('.popup .close_window, .overlay_popup').click(function (){
    $('.popup, .overlay_popup').css({'opacity': 0, 'visibility': 'hidden'});
});
$('a.open_window').click(function (e){
    $('.popup, .overlay_popup').css({'opacity': 1, 'visibility': 'visible'});
    e.preventDefault();
});

/* кнопка наверх */
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
});

