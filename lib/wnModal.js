(function ($) {
	$.fn.wnModal = function(options) {
		"use strict";

		var defaults = {
			larger: "500",
			windowID: "1",
			bordercolor: "#428BCA",
			happening: "click",
		};

		var parametres=$.extend(defaults, options);
		
		$(this).attr('data-width', parametres.larger);
		$(this).attr('data-rel', 'popup'+parametres.windowID);

		$(this).on(parametres.happening, function() {
			var popID = $(this).data('rel'); 
			var popWidth = $(this).data('width'); 
			$('#' + popID).fadeIn().css({ 'width': popWidth});
			var popMargTop = ($('#' + popID).height() + 80) / 2;
			var popMargLeft = ($('#' + popID).width() + 80) / 2;
			$('#' + popID).css({ 
				'margin-top' : -popMargTop,
				'margin-left' : -popMargLeft
			});
			$('body').append('<div id="fade"></div>');
			$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();	
			$('.popup_block').css("border", "20px solid"+parametres.bordercolor);
			return false;
		});
		$('body').on('click', 'a.close, #fade', function() { 
			$('#fade , .popup_block').fadeOut(function() {
				$('#fade, a.close').remove();  
			});
			return false;
		});
	};
})(jQuery)