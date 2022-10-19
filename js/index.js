$(function(){
    // header gnb/sub dropdown
    // $('.gnb li').mouseover(function(){
    //     $(this).children('.sub').stop().slideDown();
    // })
    // $('.gnb li').mouseleave(function(){
    //     $(this).children('.sub').stop().slideUp();
    // })

    // Content 3
    let $cntBenefitOffset = $('.cntBenefit').offset();
    $(document).on('scroll',function(){ //scroll 하면 옆에서 슬라이드하는 BG 등장
        let $windowTop = $(window).scrollTop();
        $cntBenefitTop = $cntBenefitOffset.top * 0.9; //offsetTop 임의로 정해진 값
        if( $windowTop >= $cntBenefitTop){
            $('.slideBG').css({"left":"0"});
        }else if($windowTop < $cntBenefitTop){ // 슬라이드 BG 사라짐
            $('.slideBG').css({'left':'100vw'});
        }
    })
    // End of Content 3
})