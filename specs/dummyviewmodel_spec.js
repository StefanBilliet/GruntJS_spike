(function (define, describe, beforeEach, it, expect) {
  "use strict";

  define(["dummyviewmodel"], function (Dummyviewmodel) {
  	describe("Dummyviewmodel tests:", function () {
      
      it("meaningOfLife returns the ubiqutous answer", function () {
      	var sut = new Dummyviewmodel();

        expect(sut.meaningOfLife()).toBe(42);
      });
    });
  })  
}(window.define, window.describe, window.beforeEach, window.it, window.expect));