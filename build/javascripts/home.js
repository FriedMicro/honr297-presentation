$(document).ready(function() {
  $('.slider .item:gt(0)').hide();
  setInterval(function(){
    $('.slider .item:first-child').fadeOut(700)
    .next('.item').fadeIn(700)
    .end().appendTo('.slider');},
    5000);
});
