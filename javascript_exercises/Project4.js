for (var x = 0; x <= 20; x++) {
    switch (true) {
      case (x % 5 === 0 && x % 3 === 0):
          console.log("FizzBuzz");
          break;
      case x % 3 === 0:
          console.log("Fizz");
          break;
      case x % 5 === 0:
          console.log("Buzz");
          break;
      default:
          console.log(x);
          break;
    }
}