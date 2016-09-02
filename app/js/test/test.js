let expect = require("chai").expect

describe("A basic test", function () {
  it("pass the test", function () {
    expect(true).to.be.true
  })
})

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
