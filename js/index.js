$(function(){
    // header gnb/sub dropdown
    let winH = $(window).height(),
        winW = $(window).width(),
        $header = $('body').find('.hdrWrap header');
    
    $(window).resize(function(){ //768 넘으면 sub 에 dropdown 작용
        winW = $(window).width();
        if (winW >= 768){
            $header.find('.gnb .sub').addClass('active');
            subDropDown();
        }else {
            $header.find('.gnb .sub').removeClass('active');
        }
    })
    //gnb sub menu drop down
    let subDropDown = () => {
        $('.gnb li').mouseover(function(){
            $(this).children('.active').stop().slideDown();
            console.log('mouseover');
        })
        $('.gnb li').mouseleave(function(){
            $(this).children('.active').stop().slideUp();
            console.log('mouseleave');
        })
    }
    //load 할때 subDropDown 적용
    if (winW >= 768){subDropDown();}

    //hdrMenu open/close onclick
    let $hdrMenu = $('body').find('.hdrWrap .hdrMenu'),
        $menuBtn = $('body').find('.hdrWrap .menuBtn'),
        $menuClose = $hdrMenu.find('.menuClose');
    $menuBtn.on('click',function(){
        $hdrMenu.toggleClass('active');
    })
    $menuClose.on('click',function(){
        $hdrMenu.toggleClass('active');
    })

    // End of Header


    // Content 3
    let $cntBenefitOffset = $('.cntBenefit').offset();
    $(document).on('scroll',function(){ //scroll 하면 옆에서 슬라이드하는 BG 등장
        let $windowTop = $(window).scrollTop();
        $cntBenefitTop = $cntBenefitOffset.top * 0.8; //offsetTop 임의로 정해진 값
        if( $windowTop >= $cntBenefitTop){
            $('.slideBG').css({"left":"0"});
        }else if($windowTop < $cntBenefitTop){ // 슬라이드 BG 사라짐
            $('.slideBG').css({'left':'100vw'});
        }

        $m_cntBenefitTop = $cntBenefitOffset.top * 1.4; //mobile for m_slideBG
        if( $windowTop >= $m_cntBenefitTop){
            $('.m_slideBG').css({"right":"0"});
        }else if($windowTop < $cntBenefitTop){ // 슬라이드 BG 사라짐
            $('.m_slideBG').css({'right':'100vw'});
        }
    })
    // End of Content 3

})