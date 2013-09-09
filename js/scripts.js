(function ($) {

	"use strict";

	$.fn.faceit = function (action, options) {
		// Default option
		var settings = $.extend( {}, $.fn.faceit.defaults, options );

		// Face part
		var eye = this.find('.eyes'),
			mouth = this.find('.mouth'),
			mustache = this.find('.mustache'),
			forehead = this.find('.forehead-ctn'),
			chin = this.find('.chin-ctn');

		if (action == 'destroy') {
			this.removeClass();
		} else {
			// Greenify the collection based on the settings variable.
			this.removeClass();
			return this.addClass(settings.skin + ' ' + settings.eye + ' ' + settings.asset);
		}
	};
	$.fn.faceit.defaults = {
		skin: 'light',
		outline: '#000',
		eye: 'black',
		asset: 'mustache'
	};
}(jQuery));