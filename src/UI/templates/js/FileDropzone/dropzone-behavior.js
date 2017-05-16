/**
 * Provides functions for the dropzone highlighting.
 *
 * @author nmaerchy <nm@studer-raimann.ch>
 * @version 0.0.5
 */

var il = il || {};
il.UI = il.UI || {};
(function($, UI) {
	UI.dropzone = (function ($) {

		var css = {
			"darkendBackground": "modal-backdrop in", // <- bootstrap classes, should not be changed
			"darkendDropzoneHighlight": "darkend-highlight"
		};

		var _darkendDesign = false;

		/**
		 * Prepends a div to the body tag to enable the darkend background.
		 * @private
		 */
		var _createDarkendHtmlIfNotExists = function () {
			if (!$("#il-dropzone-darkend").length) {
				$("body").prepend("<div id=\"il-dropzone-darkend\"></div>");
			}
		};

		/**
		 * Enables the darkend background design for dropzones.
		 * @private
		 */
		var _enableDarkendDesign = function () {
			$("#il-dropzone-darkend").addClass(css.darkendBackground);
			$(".il-file-dropzone").addClass(css.darkendDropzoneHighlight);
		};

		/**
		 * Enables the default background design for dropzones.
		 * @private
		 */
		var _enableDefaultDesign = function () {

		};

		/**
		 * Enables either the darkend design or the default design depending on the {@link _darkendDesign} variable.
		 */
		var enableAutoDesign = function () {
			if (_darkendDesign) {
				_enableDarkendDesign();
			} else {
				_enableDefaultDesign();
			}
		};

		/**
		 * Enables the highlight design. If the passed in argument is true, the darkend style will be used.
		 * @param {boolean} darkendBackground Flag to enable the darkend design.
		 */
		var enableHighlightDesign = function(darkendBackground) {
			if (darkendBackground) {
				_createDarkendHtmlIfNotExists(); // <- Just to ensure the darkend html does exist.
				_enableDarkendDesign();
			} else {
				_enableDefaultDesign();
			}
		};

		/**
		 * Disables all highlight designs which are active.
		 */
		var disableHighlightDesign = function () {
			$("#il-dropzone-darkend").removeClass(css.darkendBackground);
			$(".il-file-dropzone").removeClass(css.darkendDropzoneHighlight);
		};

		/**
		 * Sets the {@link _darkendDesign} and calls the {@link _createDarkendHtmlIfNotExists} function.
		 * @param darkendDesign
		 */
		var setDarkendDesign = function (darkendDesign) {
			_darkendDesign = darkendDesign;
			_createDarkendHtmlIfNotExists();
		};


		return {
			enableAutoDesign: enableAutoDesign,
			enableHighlightDesign: enableHighlightDesign,
			disableHighlightDesign: disableHighlightDesign,
			setDarkendDesign: setDarkendDesign
		};
	})($);
})($, il.UI);