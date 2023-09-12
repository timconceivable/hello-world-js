/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:
   1. Change the message that is printed.
   2. Figure out what the parentheses do. Will the code work without them?
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
   4. Remove the semi-colon, ;.
   5. Print a number. (Bonus: Print two numbers added together).
   6. Print multiple messages one after the other.
   7. Print two messages on the same line.
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   9. Other. You choose!
*/

/*
console.log('"Hello World!"');
console.log('Hello, JavaScript.');
console.log(2001);
console.log("What","do","commas","do?");
console.log("Does", "adding",      "space", "matter?");
console.log('Launch' + 'Code');
console.log("LaunchCode was founded in", 2013);
console.log(typeof "17");
console.log(typeof Number("2345"));
console.log(Number("three"));
console.log(Number('3 3'));
console.log(Number('33'));
console.log(Number('3'));
let day = "Thursday";
day = 32.5;
day = 19;
console.log(day);
let a_number = 2 ** 2 ** 3 * 3;
console.log(a_number);
console.log(1 + 5 % 3);
console.log(16 - 2 * 5 / 3 + 1);
console.log(5 % 5);

console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));
*/


const input = require('readline-sync');

let userinput = input.question("Please enter your age: ");
//wait for user input
userinput = Number(userinput);

if (isNaN(userinput)) {
   console.log("oops! that's not a number.");
} else {
   if (userinput > 100) { 
      console.log(`wow! ${userinput}? how are you still alive?`); 
   } else if (userinput > 40) { 
      console.log(`wow! ${userinput}? you're old!`); 
   } else if (userinput > 30) { 
      console.log(`you're getting pretty old!`); 
   } else console.log(`you're still young.`); 
}

/*
if (typeof userinput === 'string') {
   console.log("oops! that's not a number.");
} else {
   console.log(`wow! ${userinput}? you're old!`);
}
*/