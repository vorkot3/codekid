$('.tutorial-slider').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1150, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
});



$('.mobile-toggle').click(function(){
    $('.nav-ul').slideToggle(300, function() {
        $(this).toggleClass("active-toggle");
       
        
        if($(this).toggleClass != "active-toggle") {
            $(this).css('display', '');
        }
    });
    
     $(".nav-ul li a").click(function(event) {
         $(".nav-ul").removeClass("active-toggle");
  });
});


$('#read-more p').add("#read-more i").css("cursor", "pointer").click(function(){
        $('#more').slideToggle(500, function() {
    });
});


$('a[href^="#site-info"]').add('a[href^="#page-anchor-tutorials"]').add('a[href^="#page-anchor-downloads"]').on('click', function (event) {
    event.preventDefault();

    if($(window).width() > 960) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 0);
    } else {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 30
        }, 0);
    }
});

