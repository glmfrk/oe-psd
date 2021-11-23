$(document).ready(function () {
	$(".search-icon-bar a").on("click", function () {
		$(".search-popup").slideToggle(500);
	});

	
    //=============================
    // Sticky Start
    //=============================

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
		console.log(" it's scroll")
        if (scroll < 200) {
			console.log(" it's scroll up 200")
            $(".fixed-menu").removeClass("sticky");
        } else {
            $(".fixed-menu").addClass("sticky");
        }
    });

	$(".banner-wrapper").owlCarousel({
		center: true,
		loop: true,
		margin: 30,
		autoplay: true,
		nav: false,
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

	$(".testimonial").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 1,
				autoplay: true,
				nav: false,
				dots: true,
			},
		},
	});



	   //======================
    //  Back to Top JS
    //======================

    $("body").append(
        '<div id="toTop" class="back-to-top"><i class="fas fa-chevron-up"></i></div>'
    );
    $(window).on("scroll", function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});
