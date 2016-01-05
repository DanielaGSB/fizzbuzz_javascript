describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe("multiples of 3", function() {
    it("should return Fizz when number is 3", function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it("should return Fizz when number is 9", function() {
      expect(fizzbuzz.play(9)).toEqual('Fizz');
    });
  });

  describe("multiples of 5", function() {
    it("should return Buzz when number is 5", function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it("should return Buzz when number is 10", function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });
});
