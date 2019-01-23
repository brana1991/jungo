const $hamburgerOpenBtn = $('.js-open-nav'),
	$hamburgerCloseBtn = $('.js-close-nav');

$('.js-person:odd').addClass('team__person-even');

$hamburgerOpenBtn.on('click', () => {
	$('.main-navigation').toggleClass('show-hide-menu');
	$('.site-overlay').toggle();
	// $hamburgerOpenBtn.addClass('js-close-nav');
	$('.hamburger').toggleClass('is-active');
	$('.js-menu-text').toggleClass('add-black');
});

$('.js-close-nav').on('click', () => {
	$('.main-navigation').css('right', '-100vw');
	$('.main-navigation__hamburger-wrapper').css('opacity', '0');
	$('.site-overlay').css('display', 'none');

	$hamburgerOpenBtn.removeClass('is-active');
	$hamburgerOpenBtn.removeClass('js-close-nav');
	$hamburgerOpenBtn.addClass('js-open-nav');
});

$('.g-hero__side-scroll').on('click', function() {
	var vheight = $(window).height();
	$('html, body').animate(
		{
			scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
		},
		500,
	);
});
