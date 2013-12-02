(function (define, describe, beforeEach, it, expect) {
  "use strict";

  describe("Dummy tests:", function () {
      
      it("JS is not broken (too much anyway)", function () {
        expect(1).toBe(1);
      });

      it("RequireJS is loaded", function () {
        expect(define).not.toBeFalsy();
      });
    });
}(window.define, window.describe, window.beforeEach, window.it, window.expect));