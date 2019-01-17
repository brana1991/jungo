const $serviceInfo = $('.service__info');
const $singleService = $('.service__single-service');

$(window).scroll(function() {
	$singleService.each(function(index) {
		var top_of_element = $(this).offset().top;
		var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		var top_of_screen = $(window).scrollTop();

		setTimeout(() => {
			if (
				bottom_of_screen > top_of_element + 300 &&
				top_of_screen < bottom_of_element
			) {
				// the element is visible, do something
				$(this)
					.children('.service__info')
					.css('opacity', '1');
				$(this)
					.children('.service__info')
					.css('left', '0');
			} else {
				// the element is not visible, do something else
			}
		}, 500);
	});
});
