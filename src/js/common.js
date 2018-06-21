$(document).ready(function(){
  $(".navbtn").click(function(){
    $(".navbox").css("transform","translateX(0)");
  });
  $(".navbox .close").click(function(){
  	$(".navbox").css("transform","translateX(450px)");
  });
  $(".foot .weixin").hover(function(){
    $(".foot .img1").fadeToggle();
  });
  $(".section9 .title h2").click(function(){
    $(".section9 .main li").slideToggle();
  });
  // // 页面内跳转
  // $("section1").click(function() {
  //   $('html,body').animate({scrollTop: 0}, 500);
  // });
  // $(".topage2").click(function() {
  //   var page2 = $('#page2').offset().top-65;
  //   $('html,body').animate({scrollTop: page2}, 500);
  // });
  // $(".topage4").click(function() {
  //   var page4 = $('#page4').offset().top-65;
  //   $('html,body').animate({scrollTop: page4}, 500);
  // });
  $(".topage5").click(function() {
    var page5 = $('#page5').offset().top-65;
    $('html,body').animate({scrollTop: page5}, 500);
  });
  // $(".topage6").click(function() {
  //   var page6 = $('#page6').offset().top-65;
  //   $('html,body').animate({scrollTop: page6}, 500);
  // });
  // $(".topage7").click(function() {
  //   var page7 = $('#page7').offset().top-65;
  //   $('html,body').animate({scrollTop: page7}, 500);
  // });
  // $(".topage8").click(function() {
  //   var page8 = $('#page8').offset().top-65;
  //   $('html,body').animate({scrollTop: page8}, 500);
  // });
  // $(".topage9").click(function() {
  //   var page9 = $('#page9').offset().top-65;
  //   $('html,body').animate({scrollTop: page9}, 500);
  // });

  $('.mySlideshow').edslider({
    width : '100%',
    height: 826,
    navigator: false
  });
  $(".section3 .tab li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var i = $(this).index()
    $('.section3 .main_contan li').eq(i).addClass('active').siblings().removeClass('active');
  });
  $(".section5 .tab li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var i = $(this).index()
    $('.section5 .main_contan li').eq(i).addClass('active').siblings().removeClass('active');
  });
});
