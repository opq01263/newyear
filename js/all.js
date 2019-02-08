jQuery(document).ready(function($) {
	$("h1").hide()
	$(".enter").click(function(event) {
		$("h1").slideDown(1000)
		$(".enter").hide()

	});
});