$(function(){
    $('.bronz').click(function(){$('#33948_buyNow_simple_button').submit()});
    $('.silver').click(function(){$('#33947_buyNow_simple_button').submit()});
    $('.gold').click(function(){$('#33946_buyNow_simple_button').submit()});
    resize();
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 150
        }, 500);
        $('.buter').click();
        return false;
    });

    if ($(window).width() < 768 ) {
        console.log(123123);
        
        $('.left-menu .phone span').wrap('<a href="tel:+79033265550"><a>');
    } 
})

$(window).resize(function() {
    resize();
})

$('.buter').click(function() {
    var w = $('menu .ico').offset().left + 263;
    if ($(window).width() < 768 ) {
        w = '100%';
        $('.wrap-menu').css({float:'left'});
        $('.left-menu').css({height:'100%'})
    }
    else {
        $('.wrap-menu').css({float:'right'});
    }
    
    
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.wrap-menu','.left-menu').css('display','none');
        $('.wrap-menu','.left-menu').animate({opacity:0},200)
        $('.left-menu').animate({width:0},500);
    }
    else {
        $(this).addClass('active');
        $('.left-menu').animate(
            {width: w},
            500,
            function(){
                $('.wrap-menu','.left-menu').css('display','block');
                $('.wrap-menu',this).animate({opacity:1},200)
            });
    }
})
var resize  = function () {
    if ($(window).width() > 768) {
        $('.gallery img').width($(window).width() / 6)
    }
    if ($('.buter').hasClass('active')) {
        if ($(window).width() > 768) {
            $('.left-menu').css({width:$('menu .ico').offset().left + 263 })
        }
        else {
            $('.left-menu').css({width:'100%'});
            $('.wrap-menu').css({float:'left'});
        }    
    }
}
