<?php
/**
 * Plugin Name: APT Woocommerce Yith Sldier override
 * Description: Override Yith slider setting
 * Version: 0.0.1
 * Author: Mr.Pakpoom Tiwakornkit
 * Tested up to: 4.6
 *
 * Text Domain: apt-woocommerce-yith-slider-override
 *
 */

/**
 * Product gallery slider in Yith Magnifier plugn uses Caroufredsel jQuery plugin.
 * We will enqueue javascript file to add slider setting.
 */
function apt_woocommerce_yith_slider_override() {

	// This jquery touch swipe plugin enable mobile swipe.
	wp_enqueue_script( 'jquery-touch-swipe-plugin', plugin_dir_url(__FILE__) . 'jquery.touchSwipe.min.js', array('jquery'), 231059, true );
	
	// Override slider setting in javascript file. It's important that this file should be loaded BEFORE 'yith_wcmg_frontend' registered script. The appropriate dependency might be 'yith-magnifier'.
	wp_enqueue_script( 'apt_woocommerce_yith_slider_override_script', plugin_dir_url(__FILE__) . 'apt-woocommerce-yith-slider-override.js', array('yith-magnifier', 'jquery-touch-swipe-plugin'), 231059, true );
	
	// Custom sstyle to override Yith Magnifier slider
	wp_enqueue_style( 'apt_woocommerce_yith_slider_override_style', plugin_dir_url(__FILE__) . 'apt-woocommerce-yith-slider-override.css', 231059, true );

}
add_action( 'wp_enqueue_scripts', 'apt_woocommerce_yith_slider_override', 15 );