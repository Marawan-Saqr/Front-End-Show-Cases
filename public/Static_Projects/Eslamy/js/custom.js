(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  //navigation
  $('.navigation').onePageNav({
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //

  // Smooth scroll for the get started button
  $('.btn-get-started').on('click', function (e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 700);
    }
  });

  // Fixed navbar
  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0) {

      $('.navbar-default').removeClass('fixed-to-top');
    }
  });

  // Intro carousel
  var introCarousel = $("#introCarousel");
  var introCarouselIndicators = $("#intro-carousel-indicators");
  introCarousel.find(".carousel-inner").children(".item").each(function (index) {
    (index === 0) ?
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
    $(this).children('.carousel-background').remove();
  });

  // introCarousel.on('slid.bs.carousel', function (e) {
  //   $(this).find('h2').addClass('animated fadeInDown');
  //   $(this).find('p').addClass('animated fadeInUp');
  //   $(this).find('.btn-get-started').addClass('animated fadeInUp');
  // });


  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });


  $(window).resize(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });


  // Carousel
  $('.service .carousel').carousel({
    interval: 4000
  })

  //works
  $(function () {
    Grid.init();
  });

  //animation
  new WOW().init();
})(jQuery);

//display function
// show listing from l-one
$(document).ready(function () {
  $(".l-one").click(function () {
    $(".ull").fadeIn();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
  }); // l-one
}); // document


// show box select in common section//
$(document).ready(function () {
  $(".listing.one").click(function () {
    $(".listing.one p").slideToggle();
  }); // listing
  $(".listing.two").click(function () {
    $(".listing.two p").slideToggle();
  }); // listing
  $(".listing.three").click(function () {
    $(".listing.three p").slideToggle();
  }); // listing
  $(".listing.four").click(function () {
    $(".listing.four p").slideToggle();
  }); // listing
}); // document

//========================================================//

// show listing from l-two
$(document).ready(function () {
  $(".l-two").click(function () {
    $(".ull").hide();
    $(".ull2").fadeIn();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
  }); // l-one
}); // document

// show box select in common section//
$(document).ready(function () {
  $(".listing.five").click(function () {
    $(".listing.five p").slideToggle();
  }); // listing
  $(".listing.six").click(function () {
    $(".listing.six p").slideToggle();
  }); // listing
  $(".listing.seven").click(function () {
    $(".listing.seven p").slideToggle();
  }); // listing
  $(".listing.eight").click(function () {
    $(".listing.eight p").slideToggle();
  }); // listing
  $(".listing.nine").click(function () {
    $(".listing.nine p").slideToggle();
  }); // listing
  $(".listing.ten").click(function () {
    $(".listing.ten p").slideToggle();
  }); // listing
}); // document

//===================================================//

// show listing from l-three
$(document).ready(function () {
  $(".l-three").click(function () {
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").fadeIn();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
  }); // l-one
}); // document

// show box select in common section//
$(document).ready(function () {
  $(".listing.eleven").click(function () {
    $(".listing.eleven p").slideToggle();
  }); // listing
  $(".listing.twelve").click(function () {
    $(".listing.twelve p").slideToggle();
  }); // listing
  $(".listing.thirteen").click(function () {
    $(".listing.thirteen p").slideToggle();
  }); // listing
  $(".listing.fourteen").click(function () {
    $(".listing.fourteen p").slideToggle();
  }); // listing
  $(".listing.fifteen").click(function () {
    $(".listing.fifteen p").slideToggle();
  }); // listing
}); // document

//===================================================//

// show listing from l-four
$(document).ready(function () {
  $(".l-four").click(function () {
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").fadeIn();
    $(".ull5").hide();
    $(".ull6").hide();
  }); // l-one
}); // document

// show box select in common section//
$(document).ready(function () {
  $(".listing.sixteen").click(function () {
    $(".listing.sixteen p").slideToggle();
  }); // listing
  $(".listing.seventeen").click(function () {
    $(".listing.seventeen p").slideToggle();
  }); // listing
  $(".listing.eighteen").click(function () {
    $(".listing.eighteen p").slideToggle();
  }); // listing
  $(".listing.nineteen").click(function () {
    $(".listing.nineteen p").slideToggle();
  }); // listing
}); // document

//====================================================//

// show listing from l-five
$(document).ready(function () {
  $(".l-five").click(function () {
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").fadeIn();
    $(".ull6").hide();
  }); // l-one
}); // document

// show box select in common section//
$(document).ready(function () {
  $(".listing.twenty").click(function () {
    $(".listing.twenty p").slideToggle();
  }); // listing
  $(".listing.twenty-one").click(function () {
    $(".listing.twenty-one p").slideToggle();
  }); // listing
  $(".listing.twenty-two").click(function () {
    $(".listing.twenty-two p").slideToggle();
  }); // listing
  $(".listing.twenty-three").click(function () {
    $(".listing.twenty-three p").slideToggle();
  }); // listing
  $(".listing.twenty-four").click(function () {
    $(".listing.twenty-four p").slideToggle();
  }); // listing
  $(".listing.twenty-five").click(function () {
    $(".listing.twenty-five p").slideToggle();
  }); // listing
}); // document

//====================================================//

// show listing from l-six
$(document).ready(function () {
  $(".l-six").click(function () {
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").fadeIn();
  }); // l-one
}); // document

// show box select in common section//
$(document).ready(function () {
  $(".listing.twenty-six").click(function () {
    $(".listing.twenty-six p").slideToggle();
  }); // listing
  $(".listing.twenty-seven").click(function () {
    $(".listing.twenty-seven p").slideToggle();
  }); // listing
  $(".listing.twenty-eight").click(function () {
    $(".listing.twenty-eight p").slideToggle();
  }); // listing
  $(".listing.twenty-nine").click(function () {
    $(".listing.twenty-nine p").slideToggle();
  }); // listing
  $(".listing.thirty").click(function () {
    $(".listing.thirty p").slideToggle();
  }); // listing
  $(".listing.thirty-one").click(function () {
    $(".listing.thirty-one p").slideToggle();
  }); // listing
}); // document


//Dark Mode Function
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  //change the theme of website
  document.body.classList.toggle('dark');
});