jQuery(function($){

	
			
	/* ----------------------------------------------------------- */
	/*  2. HOVER DROPDOWN MENU
	/* ----------------------------------------------------------- */ 
	
	// for hover dropdown menu
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

  	/* ----------------------------------------------------------- */
	/*  3. BOOTSTRAP ACCORDION
	/* ----------------------------------------------------------- */ 
	
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	});
	
	//The reverse of the above on hidden event:
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});	

	
	/* ----------------------------------------------------------- */
	/*  11. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});	   
	   
	//Click event to scroll to top

	$('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});

	/* ----------------------------------------------------------- */
	/*  12. PRELOADER 
	/* ----------------------------------------------------------- */ 
	
	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })

   
	/* ----------------------------------------------------------- */
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        live:         true,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init(); 


	/* ----------------------------------------------------------- */
	/*  14. Fixed Header
	/* ----------------------------------------------------------- */

    $(window).on('scroll', function(){
       if ( $(window).scrollTop() > 200 ) {
         $('.top-section').addClass('sticky');
         $('#logo').attr("src", "assets/images/small_logo.png");
         $('#header').css("height", "80px");
         $('.logo_image').css("width", "100px");
         $('#menu-area').css("display", "none");
         $('.top-section').hover(
	    	function() {
	    		console.log("Hello");
	    		$('#menu-area').css("display", "inline");
	    		$('#menu-area').fadeIn(100);
	    	}, function() {
	    		$('#menu-area').css("display", "none");
	    		$('#menu-area').fadeOut(100);
	    	}
    	);	
       } else {
         $('.top-section').removeClass('sticky');
         $('#logo').attr("src", "assets/images/logo.png");
         $('#header').css("height", "200px");
         $('.logo_image').css("width", "400px");
         $('#menu-area').css("display", "initial");
         $('.top-section').unbind("mouseenter mouseleave");
       }
     });

    
});