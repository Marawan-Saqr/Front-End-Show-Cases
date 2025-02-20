var button = document.getElementById("button");

$(document).ready(function(){
    // header
    $("header button").click(function(){
        $(".overlay").css({
            backgroundColor: "rgba(0, 2, 53, .6)",
        })
        $("header p").css({
            color : "black",
        })
    })

    // section service
    $(".service p span").click(function(){
        $(".all").slideToggle(1000);
    })

    // section about-us
    $(".about-us button").click(function(){
        if(button.textContent == "Show More") {
            $("p span").fadeIn(1000);
            button.textContent = "Show Less";
        } else if(button.textContent == "Show Less") {
            $("p span").fadeOut(1000);
            button.textContent = "Show More";
        }
    })
})


































































































