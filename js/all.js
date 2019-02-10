$(document).ready(function() {
$(function(){
    setInterval(flicker,200);//迴圈閃爍，間隔1秒
})
function flicker(){//閃爍函數
    $('.pp').fadeOut(200).fadeIn(200);
}
  $('.question h1').click(function(event) {

    // 讓點擊到的 h3 亮起來，其他h3移除active樣式
    $(this).toggleClass('active');

    // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔
    $(this).parent().find('p').slideToggle();

    // 自己以外的 p 隱藏起來
    $(this).parent().siblings().find('p').slideUp();
    // 自己以外的 h3 移除u樣式
    $(this).parent().siblings().find('h1').removeClass('active');

  });
});
