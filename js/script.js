"use strict"

$(".trigger").click(navOpen);
function navOpen(){
    $(".header, .trigger").toggleClass("active");
};


$(function (){
    $(window).scroll(function(){
        $(".fade").each(function(){
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 100){
                $(this).addClass("view");
            };
        });
    });
});

$(window).on("load scroll",addApp);

function addApp(){
    let keyH = $(".change_point").innerHeight();
    let ws = $(this).scrollTop();

    if(ws > keyH){
        $(".gotop").addClass("app");
    }else{
        $(".gotop").removeClass("app");
    }
};