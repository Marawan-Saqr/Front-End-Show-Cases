// show li in class list in nav
$(document).ready(function(){

    $(".Bookings").click(function(){
        $(".first").slideToggle();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        $(".fifth").hide();
        $(".sixth").hide();
        $(".seventh").hide();
    });

    $(".Flight-Informations").click(function(){
        $(".first").hide();
        $(".second").slideToggle();
        $(".third").hide();
        $(".fourth").hide();
        $(".fifth").hide();
        $(".sixth").hide();
        $(".seventh").hide();
    });

    $(".Special-Offers").click(function(){
        $(".first").hide();
        $(".second").hide();
        $(".third").slideToggle();
        $(".fourth").hide();
        $(".fifth").hide();
        $(".sixth").hide();
        $(".seventh").hide();
    });

    $(".Inspirations").click(function(){
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").slideToggle();
        $(".fifth").hide();
        $(".sixth").hide();
        $(".seventh").hide();
    });

    $(".Tabua-Club").click(function(){
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        $(".fifth").slideToggle();
        $(".sixth").hide();
        $(".seventh").hide();
    });

    $(".About-Cairo-Airways").click(function(){
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        $(".fifth").hide();
        $(".sixth").slideToggle();
        $(".seventh").hide();
    });

    $(".Contacts-Us").click(function(){
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        $(".fifth").hide();
        $(".sixth").hide();
        $(".seventh").slideToggle();
    });

    // show section main

    $(".box.one").click(function(){
        $(".main.one").fadeIn(1000);
        $(".main.two").hide();
        $(".main.three").hide();
        $(".main.four").hide();
        
    });

    $(".box.two").click(function(){
        $(".main.one").hide();
        $(".main.two").fadeIn(1000);
        $(".main.three").hide();
        $(".main.four").hide();
    });

    $(".box.three").click(function(){
        $(".main.one").hide();
        $(".main.two").hide();
        $(".main.three").fadeIn(1000);
        $(".main.four").hide();
    });

    $(".box.four").click(function(){
        $(".main.one").hide();
        $(".main.two").hide();
        $(".main.three").hide();
        $(".main.four").fadeIn(1000);
    });
}); // document





// plugins
new WOW().init();  // wow.js
var scroll = new SmoothScroll('a[href*="#"]');   // smooth-scroll