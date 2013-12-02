(function (define) {
	"use strict";

	define([], function () {
		var DummyViewModel = function () {
			var self = this;

			self.meaningOfLife = function () {
				return 42;
			}

			return self;
		}

		return DummyViewModel;
	})
})(window.define)