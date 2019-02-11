$(function(){
// --- ハンバーガーメニュー アコーディオン ---
$('.icon-swith').click(function(){
  $('.global-nav').slideToggle();
  if($(this).hasClass('open')) {
    $(this).html('<i class="fas fa-bars""></i>');
    $(this).removeClass('open');
  } else {
    $(this).html('<i class="fas fa-times fa-lg"></i>');
    $(this).addClass('open');
  }
});

});
