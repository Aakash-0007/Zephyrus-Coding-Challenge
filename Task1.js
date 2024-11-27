//Task 1: Reverse String (JavaScript)
function reverseString(str) {
  return str.split('').reverse().join('');
}  
/* This approach is efficient
 split('') : Converts the string into an array.
 reverse() : Reverses the array in place.
 join('')  : Joins the array back into a string.

Time Complexity:O(n)
Space Complexity:O(n) 

The reason for using split-reverse-join method is that its the simplest and most readable approach.
*/
