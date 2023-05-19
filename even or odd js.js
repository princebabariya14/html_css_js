function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage
  var num = 5;
  var result = checkEvenOdd(num);
  console.log(num + " is " + result);
  