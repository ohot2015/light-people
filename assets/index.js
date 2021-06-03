import './scss/main.scss'
import $ from 'jquery';
import lightbox from 'lightbox2'
//import 'lightbox2/dist/css/lightbox.min.css'

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
global.jQuery = $;
global.$ = $;
$(function(){
  $('.bronz').click(function(){$('#39692_buyNow_simple_button').submit()});
  $('.silver').click(function(){$('#33947_buyNow_simple_button').submit()});
  $('.gold').click(function(){$('#33946_buyNow_simple_button').submit()});

  $('.platina').click(function(){$('#39516_buyNow_simple_button').submit()});
  $('.corporat').click(function(){$('#48235_buyNow_simple_button').submit()});
  $('.diamond').click(function(){$('#48234_buyNow_simple_button').submit()});
  $('.unlim').click(function(){$('#48507_buyNow_simple_button').submit()});
  $('.faded').click(function(){ $(this).hide(); $('.baraner').hide()})
  $('.baraner .close').click(function(){ $('.faded').hide();$('.baraner').hide()})
  $('.baraner-href').click(function(){
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 500);
    $('.faded').hide();$('.baraner').hide()
    return false
  })
  resize();
  var $page = $('html, body');
  $('a[href*="#"]:not(.baraner-href)').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 500);
    $('.buter').click();
    return false;
  });
})
$(window).resize(function() {
  resize();
})
$('.buter').click(function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.wrap-menu','.left-menu').css('display','none');
    $('.wrap-menu','.left-menu').animate({opacity:0},200)
    $('.left-menu').animate({width:0},500);
  }
  else {
    $(this).addClass('active');
    $('.left-menu').animate(
      {width:$('menu .ico').offset().left + 263 },
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
    $('.left-menu').css({width:$('menu .ico').offset().left + 263 })
  }
}
