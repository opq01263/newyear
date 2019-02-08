jQuery(document).ready(function($) {
	$("h1,p").hide()
	$(".enter").click(function(event) {
		$("h1,p").slideDown(500)
		$(".enter").hide()
$(function(){
    setInterval(flicker,500);//迴圈閃爍，間隔1秒
})
function flicker(){//閃爍函數
    $('p').fadeOut(500).fadeIn(500);
}
	});
});
