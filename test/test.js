require('chai').should()

describe('Two plus two', function () {
  it('should test that 2 + 2 = 4', function () {
    var value = 2 + 2
    value.should.equal(4)
  })
})

// Unit testing: samll tests covering individual functions
// Mocha
// Chai
// Jasmine


// equal          -    1,  '2'
// strictEqual    -    3, 4, 5
// deepEqual      -    value of each property, not reference

// ok             -    anything that is not falsy
// isNull         -    Null
// true           -    boolean true
// fail           -    forced failure

// match
//throws
