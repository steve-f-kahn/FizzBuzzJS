describe('FizzBuzz', function() {
  var game;

  beforeEach(function() {
    game = new fizzBuzz();
  });
  it("Prints the number 1", function() {
    expect(game.fun(1)).toEqual(1);
  });

  it("Prints 'fizz' on a 3", function() {
    expect(game.fun(3)).toEqual('fizz');
  });

  it("Prints 'buzz' on a 5", function() {
    expect(game.fun(5)).toEqual("buzz");
  });

  it("Print 'fizzbuzz' on 15", function() {
    expect(game.fun(15)).toEqual("fizzbuzz");
  });

  it ("Print the number 2 on 2", function() {
    expect(game.fun(2)).toEqual(2);
  });
});
