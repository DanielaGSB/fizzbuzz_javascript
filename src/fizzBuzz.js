function Fizzbuzz(){
}
Fizzbuzz.prototype.play = function(number) {
  if (number%15===0) {
    return("Fizzbuzz")
  } else if (number%5===0) {
    return("Buzz")
  } else if (number%3===0) {
      return("Fizz")
  } else { return(number) };
};
