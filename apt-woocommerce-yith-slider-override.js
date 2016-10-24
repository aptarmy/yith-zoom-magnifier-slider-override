/**
 * Product gallery slider in Yith Magnifier plugn uses Caroufredsel jQuery plugin
 * To change slider setting, take a look following link as a reference
 * https://dev7studios.com/caroufredsel-old/configuration.php
 * Caroufredsel jQuery plugin option should be stored in yith_magnifier_options.sliderOptions opject
 */

// Enable swipe. Before using this option, you must enqueue jQuery touch swipe plugin
yith_magnifier_options.sliderOptions.swipe = {
	onMouse: true,
	onTouch: true
}

// Auto play carousel
yith_magnifier_options.sliderOptions.auto = false;

// Fix css heihgt error of the two element: '.caroufredsel_wrapper' and '.yith_magnifier_gallery'
// when the slides are resized by Caroufredsel plugin
(function(){
	jQuery(document).ready(function(){
		apt_yith_thumbnail_slider_height_reset();
		jQuery(window).resize(function(){ apt_yith_thumbnail_slider_height_reset(); });
	});
	function apt_yith_thumbnail_slider_height_reset(){
		setTimeout(function(){
			var yith_magnifier_thumbnail_height = jQuery(".yith_magnifier_thumbnail").outerHeight();
			console.log(yith_magnifier_thumbnail_height);
			jQuery(".caroufredsel_wrapper, .yith_magnifier_gallery").css({"height": yith_magnifier_thumbnail_height + "px"});
		}, 100);
	}
})();