$(function() {

$('.logo_claire').hide();

		$('.socialhover_claire').hover(
			function () {
				$('.logo_claire').fadeIn();
			}, function () {
				$('.logo_claire').fadeOut();
		});

if ($(window).width() <= 1024) {
        $(".logo_claire").show();
    	};

$('.logo_franck').hide();

		$('.socialhover_franck').hover(
			function () {
				$('.logo_franck').fadeIn();
			}, function () {
				$('.logo_franck').fadeOut();
		});
if ($(window).width() <= 1024) {
        $(".logo_franck").show();
    	};
	});