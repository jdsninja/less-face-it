(function ($) {

	"use strict";

	// Change face
	$(".settings select").change(function () {
		var elm = $(elm),
			elmID = elm.attr('id'),
			elmVal = $(this).val();
		$("#face").faceit('', {skin: $('#skin').val(), eye: $('#eyes').val(), asset: $('#asset').val()});
	});


	// Reset face
	$(".btn.reset").on('click',function (e) {
		e.preventDefault();
		$("#face").faceit('destroy');
		$(".settings select option:first").attr('selected','selected');

	});


	// Generate face
	$("#face").faceit('', {skin: $('#skin').val(), eye: $('#eyes').val(), asset: $('#asset').val()});

}(jQuery));