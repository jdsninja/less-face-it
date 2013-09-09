(function ($) {

	"use strict";

	$.fn.extend({
		faceit: function(options,arg) {
			if (options && typeof(options) == 'object') {
				options = $.extend( {}, $.faceit.defaults, options );
			}
			this.each(function() {
				new $.faceit(this, options, arg );
			});
			return;
		}
	});

	$.faceit = function(elem, options, arg ) {
		if (options && typeof(options) == 'string') {
			if (options == 'build') {
				build( arg );
			}
			else if (options == 'destroy') {
				destroy( arg );
			}
			return;
		}else{
			$(elem).removeClass();
			return $(elem).addClass(options.skin + ' ' + options.eye + ' ' + options.asset);
		}

		function build(arg){
			// Build the face
			$(elem).attr('data-face','');
		}

		function destroy(arg){
			// Reset the face
			$(elem).removeClass();
		}
	};

	$.fn.faceit.defaults = {
		skin: 'light',
		eye: 'black',
		asset: 'mustache'
	};
}(jQuery));