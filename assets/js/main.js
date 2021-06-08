(function ($) {
	"use strict";

    jQuery(document).ready(function($){ 
        // Nav js
        $('#nav').onePageNav();
        
        // menu 
        $('.siteBar-btn').click( function (){ 
            $('.mobile-menu').toggleClass('siteBar');   
        }); 


        // sticky-nav
        window.onscroll = function() {myFunction()}; 
            var navbar = document.getElementById("header");
            var sticky = navbar.offsetTop; 
            function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
            }
        
        // testimonail-slider
        $(".testimonails").owlCarousel({
            items:1,
            nav:false,
            dot:false,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000, 
        });

        // counterUp js
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });
         

    });
  
}(jQuery));	
