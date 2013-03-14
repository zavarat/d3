var vows = require("vows"),
    load = require("../load"),
    assert = require("../env-assert");

var suite = vows.describe("d3.descending");

suite.addBatch({
  "descending": {
    topic: load("arrays/descending"),
    "numbers": {
      "returns a negative number if a > b": function(d3) {
        assert.isTrue(d3.descending(1, 0) < 0);
      },
      "returns a positive number if a < b": function(d3) {
        assert.isTrue(d3.descending(0, 1) > 0);
      },
      "returns zero if a == b": function(d3) {
        assert.equal(d3.descending(0, 0), 0);
      },
      "returns NaN if a or b is undefined": function(d3) {
        assert.isNaN(d3.descending(0, undefined));
        assert.isNaN(d3.descending(undefined, 0));
        assert.isNaN(d3.descending(undefined, undefined));
      },
      "returns NaN if a or b is NaN": function(d3) {
        assert.isNaN(d3.descending(0, NaN));
        assert.isNaN(d3.descending(NaN, 0));
        assert.isNaN(d3.descending(NaN, NaN));
      }
    },
    "strings": {
      "returns a negative number if a > b": function(d3) {
        assert.isTrue(d3.descending("b", "a") < 0);
      },
      "returns a positive number if a < b": function(d3) {
        assert.isTrue(d3.descending("a", "b") > 0);
      },
      "returns zero if a == b": function(d3) {
        assert.equal(d3.descending("a", "a"), 0);
      }
    }
  }
});

suite.export(module);