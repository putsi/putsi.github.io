$(document).ready(function() {
	$(window).on("hashchange", function() {
	   	var hash = window.location.hash.substring(1);
	  	$(".nav-item").toggleClass("active", false);
		$(".item-" + hash).toggleClass("active", true);
	  	$("section").toggleClass("visible-print-block", true);
	   	$("#" + hash).toggleClass("visible-print-block", false);
	 });
});