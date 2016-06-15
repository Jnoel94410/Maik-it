$(function() {

$('.logo_claire').hide();

		$('.socialhover_claire').hover(
			function () {
				$('.logo_claire').fadeIn();
			}, function () {
				$('.logo_claire').fadeOut();
		});

$('.logo_franck').hide();

		$('.socialhover_franck').hover(
			function () {
				$('.logo_franck').fadeIn();
			}, function () {
				$('.logo_franck').fadeOut();
		});


$(window).resize(function() {
   if ($(this).width() > 1000) {
      $('.logo_claire').show();
   }
});

$(window).resize(function() {
   if ($(this).width() > 1000) {
      $('.logo_franck').show();
   }
});

});// document ready