$(document).ready(function () {
  // pcHeader.on
  $(window).on('scroll', function(){
    if ($(this).scrollTop()>10) $('#pcHeader').removeClass('on').addClass('beige');
    else $('#pcHeader').addClass('on').removeClass('beige');
  });

  // pcGnb
  const $gnb = $('#gnb > ul');
  const $gnbD2 = $gnb.find('li ul');
  const $gnbD2a = $gnb.find('li ul li a');

  $gnbD2.hide();

  $gnb.children().on('mouseenter focusin', function(){
    $(this).addClass('on').siblings('li.on').removeClass('on');
    $('#pcHeader').addClass('active');
    $gnbD2.stop().slideDown();
   });
  $gnb.on('mouseleave', function(){
    $(this).children().removeClass('on').children('ul').stop().slideUp('fast', function(){
      $('#pcHeader').removeClass('active').find('#gnb').removeClass('on');
    });
  });

  // dep2 a:hover, a:focus 제어
  const $gnbLine = $('#gnbLine');
  $gnbD2a.on('mouseenter focusin', function(){
    $(this).after($gnbLine);
  });
  $gnbD2a.on('mouseleave', function(){
    $(this).siblings($gnbLine).remove();
  });
  // gnb키보드 제어
  $gnb.find('a').first().on('keydown', function(e){
    if((e.shiftKey || e.keyCode === 16) && e.keyCode === 9) $gnb.trigger('mouseleave');
  });
  $gnb.find('a').last().on('keydown', function(e){
    if((!e.shiftKey || e.keyCode !==16) && e.keyCode ===9) $gnb.trigger('mouseleave');
  });
});