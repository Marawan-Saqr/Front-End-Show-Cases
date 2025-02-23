$(document).ready(function(){
    
    $(".movies").animate({
        width: "100%",
    }, 2000, function(){
        $(".movies").animate({
            height: window.innerHeight
        }, 2000, function(){
            $("h2").slideDown(2000, function(){
                $(".box.one").slideDown(2000, function(){
                    $(".box.two").slideDown(2000, function(){
                        $(".box.three").slideDown(2000, function(){
                            $(".box.four").slideDown(2000);
                        })
                    })
                });
            })
        })
    })

    
});  // document


































































































