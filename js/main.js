 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	/* Active Menu */

$(window).on("scroll", function () {

    var scrollPos = $(document).scrollTop() + 120;

    $('.navbar-nav a').each(function () {

        var curr = $(this);

        var ref = $(curr.attr("href"));

        if (ref.length) {

            if (

                ref.position().top <= scrollPos &&

                ref.position().top + ref.height() > scrollPos

            ) {

                $(".navbar-nav li").removeClass("active");

                curr.parent().addClass("active");

            }

        }

    });

});





	$('.navbar .dropdown').hover(

function(){

    $(this)

    .find('.dropdown-menu')

    .stop(true,true)

    .fadeIn(250);

},

function(){

    $(this)

    .find('.dropdown-menu')

    .stop(true,true)

    .fadeOut(180);

}

);











	// scroll
	var scrollWindow = function () {

    var lastScroll = 0;

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        var navbar = $(".custom-navbar");

        // Glass Effect

        if (st > 80) {

            navbar.addClass("scrolled");

        } else {

            navbar.removeClass("scrolled");

        }

        // Hide on Scroll Down

        if (st > lastScroll && st > 250) {

            navbar.css({

                transform: "translateY(-120%)"

            });

        }

        // Show on Scroll Up

        else {

            navbar.css({

                transform: "translateY(0)"

            });

        }

        lastScroll = st;

    });

};

scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);










/*=========================================
    FLOATING BUTTONS
=========================================*/
document.addEventListener("DOMContentLoaded", function () {

    const scrollBtn = document.getElementById("scrollTop");
    const circle = document.querySelector(".progress-ring-circle");

    if (!scrollBtn || !circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    function updateProgress() {

        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let progress = scrollTop / scrollHeight;

        progress = Math.min(Math.max(progress, 0), 1);

        circle.style.strokeDashoffset =
            circumference - (progress * circumference);

        // Show / Hide button
        if (scrollTop > 250) {
            scrollBtn.classList.add("active");
        } else {
            scrollBtn.classList.remove("active");
        }
    }

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    scrollBtn.onclick = function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

});




/*=========================================
    SMOOTH SCROLL NAVIGATION
=========================================*/

$('.navbar-nav a[href^="#"], .nav-buttons a[href^="#"]').on('click', function(e){

    e.preventDefault();

    var target = $(this.getAttribute('href'));

    if(target.length){

        $('html, body').stop().animate({

            scrollTop: target.offset().top - 90

        }, 900, 'swing');

    }

    // Close mobile menu
    $('.navbar-collapse').collapse('hide');

});






/*=========================================
    ACTIVE MENU ON SCROLL
=========================================*/

$(window).on('scroll', function(){

    var scrollPos = $(document).scrollTop() + 120;

    $('.navbar-nav .nav-link').each(function(){

        var currLink = $(this);

        var refElement = $(currLink.attr("href"));

        if(refElement.length){

            if(refElement.position().top <= scrollPos &&
               refElement.position().top + refElement.height() > scrollPos){

                $('.navbar-nav .nav-item').removeClass("active");

                currLink.parent().addClass("active");

            }

        }

    });

});





