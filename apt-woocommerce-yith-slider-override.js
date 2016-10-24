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
yith_magnifier_options.sliderOptions.auto = true;