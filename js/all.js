jQuery(document).ready(function($) {
	$("h1,p").hide()
	$(".enter").click(function(event) {
		$("h1,p").slideDown(500)
		$(".enter").hide()

	});
});