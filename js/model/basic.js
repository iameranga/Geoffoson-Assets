/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic' ).click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
		$('#basic-modal .basic2' ).click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
});



jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal1 .basic' ).click(function (e) {
		$('#basic-modal-content1').modal();

		return false;
	});
		$('#basic-modal1 .basic2' ).click(function (e) {
		$('#basic-modal-content1').modal();

		return false;
	});
});