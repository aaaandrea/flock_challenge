// Problem #3
// Create a calculator Javascript object that has a functions to add/subtract/multiply/divide. It should allow me to do something like this.
// Calc = Calculator.new()
//
// Calc.add(2, 2)     // returns 4
//
// Calc.subtract(10, 3) // returns 7
// Calc.subtract(10, -3) // returns 13
//
// Calc.multiply(2,10) // returns 20
//
// Calc.divide(20,10) // returns 2
// Calc.divide(null,10) // returns null
//
// Please take creative liberties with what the exact JavaScript API looks like.
// Please copy and paste code example steps for us to check that addition,
// subtraction, multiplication, and division steps work as expected.
// We care more about you describing how the code was put togehter
// than it being coded a specific way.
//


class Calculator {
  constructor(){
  }

  add(num1, num2){
    let result = num1 + num2;
    return result;
  }

  subtract(num1, num2){
    let result = num1 - num2;
    return result;
  }

  multiply(num1, num2){
    let result = num1 * num2;
    return result;
  }

  divide(num1, num2){
    let result = num1 / num2;
    return result;
  }
}
