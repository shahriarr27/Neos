$(document).ready(function($){


  $(window).on('load',function() {
		$(".loader").delay(1000).fadeOut("slow");
  	$("#overlayer").delay(1000).fadeOut("slow");		
	});

  $(".projects-carousel").owlCarousel({
    loop:false,
    rewind:true,
    items: 1,
    autoplay:true,
    dots:false,
    smartSpeed: 1200,
    autoplayTimeout:5000,
    nav:true,
    navText:["<i class='icon icon-arrow_back'></i>","<i class='icon icon-arrow_forward'></i>"],
    responsive:{
       0:{
          items: 1
       },
       768:{
          items: 2
       },
       769:{
         items: 3,
         center:false
      }
    }
  });
  

  $('.num').countUp({
    delay: 70,
    time: 5000,
  });

  $(".testimonials-carousel").owlCarousel({
    loop:false,
    items: 1,
    autoplay:true,
    dots:true,
    smartSpeed: 1200,
    autoplayTimeout:5000,
    nav:true,
    navText:["<i class='icon icon-arrow_back'></i>","<i class='icon icon-arrow_forward'></i>"],
    responsive:{
       0:{
          items: 1
       },
       768:{
          items: 1
       },
       769:{
         items: 1,
         center:true
      }
    }
  });

  // $('.parallax-window-1').parallax({imageSrc: 'images/hero_1.jpg'});

  AOS.init();
//   //animation on scroll navbar

// var siteScroll = function() {
//   $(window).on('scroll',function(){
//     if($(window).scrollTop()>100){
//         $('nav').addClass('nav-white');
//     }
//     else{
//         $('nav').removeClass('nav-white');
//     }
//   });
// };
// siteScroll();
// //typed.js

// var typed = new Typed('.type',{
//   strings:[
//     'wordpress themes',
//     'responsive website'
//   ],
//   smartBackspace: true,
//   typeSpeed: 40,
//   backSpeed: 30,
//   backDelay:3000,
//   loop: true,
//   naturalHeight: 900
// });

// //fancybox

// $('.fancybox').fancybox();



});