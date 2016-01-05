function Fizzbuzz(){
}
Fizzbuzz.prototype.play = function(number) {
  if (number%3===0) {
    return("Fizz")
  } else if (number%5===0) {
    return("Buzz")
  };
};
