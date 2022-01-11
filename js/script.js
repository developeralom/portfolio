$(function(){
    'use strict';

    // Counter up part start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // banner heading typing animation 
    var typed = new Typed('.type', {
      strings: [
        ' Shah Alam',
         ' a Web Designer',
         'a Web Developer'
        ],
        typeSpeed: 60,
        backSpeed:60,
        loop:true
    });


// Skill bar s
    $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 800,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });


      // filer js start
      var mixer = mixitup('.portfolio');

      // Slick Slider start
      $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,

      });

      // scroll smooth 

      AOS.init({
        duration:2000
      });

      $(document).on('click', '#navbarSupportedContent ul li', function(){
        $(this).addClass('active').siblings().removeClass('active')
      }); 
})
