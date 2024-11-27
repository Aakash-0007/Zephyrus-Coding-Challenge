// Task 2: FizzBuzz (JavaScript)
//Write a JavaScript function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/* 
Time Complexity: O(n)
Space Complexity: O(1)

In my approach, I used a for loop to iterate through numbers from 1 to 100. For each number, I used conditional statements to check:

Multiples of both 3 and 5: If the number is divisible by both, I printed "FizzBuzz".
Multiples of 3 only: If divisible by 3 but not 5, I printed "Fizz".
Multiples of 5 only: If divisible by 5 but not 3, I printed "Buzz".
All other numbers: Printed the number itself.

*/
