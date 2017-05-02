# Problem 1

  ```
  Using Twitter Bootstrap (or HTML/CSS if you don’t know Bootstrap), make a single page with static HTML that includes:
  Input form for a new todo item
  Table with rows for each todo item

  Each todo item contains the following data elements
  Name (string)
  Topic (Array of strings)
  Due Date (date)
  Completed (boolean)

  Fill in the HTML with 5 example todo items.
  Don’t worry about making the Todo List interactive or able to add new todo items to the list. We’re only concerned in seeing how you structure the HTML and CSS. Therefore, don’t worry about making the page interactive. All the todo items should be statically coded in HTML.
  Please take creative liberties with styling HTML to be something that you’d be happy using :)
  ```


  Please view [main.html](https://github.com/adelrio1/flock_challenge/blob/master/main.html) with [main.css](https://github.com/adelrio1/flock_challenge/blob/master/main.css) for the solution to this problem


# Problem 2
  Please explain the difference between the following jQuery functions. What impact has or will this have on code you’ve written?

  ```
  1. $(“.todo-item”).on(“click”, function(e){ console.log(e) });
  ```
  Here, when a user clicks on '.todo-item', this will trigger the .todo-item event, pass it to the function, and log the event to the console.

  ```
  2. $(document).on(“click”, “.todo-item”, function(e){ console.log(e) });
  ```
  This is making use of the DOM. On click of ".todo-item" this will pass the anonymous function the event and log the event to the console.


# Problem 3
```
  Create a calculator Javascript object that has a functions to add/subtract/multiply/divide. It should allow me to do something like this.

  Calc = Calculator.new()

  Calc.add(2, 2)     // returns 4

  Calc.subtract(10, 3) // returns 7
  Calc.subtract(10, -3) // returns 13

  Calc.multiply(2,10) // returns 20

  Calc.divide(20,10) // returns 2
  Calc.divide(null,10) // returns null

  Please take creative liberties with what the exact JavaScript API looks like. Please copy and paste code example steps for us to check that addition, subtraction, multiplication, and division steps work as expected. We care more about you describing how the code was put togehter than it being coded a specific way.
```

  This felt fairly straightforward. A new calculator is not passed any elements. Elements are only passed whenever a method is being called on it. Each method, or operation, is called and passed two numbers. They are resolved and explicitly returned for the user.


  Please view [calculator.js](https://github.com/adelrio1/flock_challenge/blob/master/calculator.js) for the solution to this problem
