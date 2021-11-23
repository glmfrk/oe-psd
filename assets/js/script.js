$(document).ready(function () {
	//=============================
	// Sticky Start
	//=============================

	// $(window).on("scroll", function (event) {
	// 	event.preventdefault();
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll < 200) {
	// 		$(".fixed-menu").removeClass("sticky");
	// 	} else {
	// 		$(".fixed-menu").addClass("sticky");
	// 	}
	// });

	//=============================
	// MOBILE Nav
	//=============================

	$(".toggler-icon").on("click", function () {
		$(".mobile-menu").slideToggle(500);
	});

	$(".search-icon-bar a").on("click", function () {
		$(".search-popup").slideToggle(500);
	});

	$(".banner-wrapper").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	$(".feedback-slider").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: false,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});
