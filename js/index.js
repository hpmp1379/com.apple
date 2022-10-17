$(function(){
    $('.gnb li').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    })
    $('.gnb li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    })
})