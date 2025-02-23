// show div home from li home //
$(document).ready(function(){

    $("nav .one").click(function(){
        $(".home").slideDown(900);
        $(".play").hide(900);
        $(".online").hide(900);
        $(".option").hide(900);
    });

    $("nav .two").click(function(){
        $(".home").hide(900);
        $(".play").slideDown(900);
        $(".online").hide(900);
        $(".option").hide(900);
    });

    $("nav .three").click(function(){
        $(".home").hide(900);
        $(".play").hide(900);
        $(".online").slideDown(900);
        $(".option").hide(900);
    });

    $("nav .four").click(function(){
        $(".home").hide(900);
        $(".play").hide(900);
        $(".online").hide(900);
        $(".option").slideDown(900);
    });
});  // document