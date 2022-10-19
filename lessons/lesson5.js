/* Lesson 5 - Functions and Scope */

/* Functions are thr building block of JavaScript
They are considered first class objects. */
function simpleFunction( ) {  
  console.log("HelloJavaScript");
} // end function

/* This function returns a string */
function simpleFunction2(){
       return 'Simple function 2 return';
} // end function 

/* This functionn takes a parameter */
function simplefunction3(message) {
    console.log(message);
} // end function

/* Calling Functions above */ 
simpleFunction();

let simple =simpleFunction2();
console.log(simple);

console.log(simpleFunction2());

simplefunction3('Simple Message 3');

simplefunction3(42);

/* Function Expression
Define a function inside an expression*/
const squareFoot = function(length, width) {
    return length * width;
} // end function

console.log(squareFoot(24,32));

/* Global scope */
/* Variables can have local or global scope. 
Global meaning everyone can see it vs local which is contained within scope*/

function sample1() {
    able = 32;
    let beta = 'Hello';
console.log(beta);
} // end function

function sample2() {
    /* able has no defined declaration keyword therefore it is global */
    console.log(able);
    console.log(beta);
} // end function



sample1();
// sample2();

/* Nested function */
/* Functions inside of Functions. Inner function has access to the scope of the outer function. The outer function does not have access to the inner function scope. */

function outerscope(value1) {
let charlie = 20;

// Inner function
function innerscope() {
    let total = charlie + value1;
    console.log(total);
} // end function

// call innerscope function
innerscope();



} // end function

outerscope(10);

/* Closure */
/* A way for a function to have private variables usingn an annonomous function with a nested function. */
const addFive = function() {
    let total = 0;
    return function() {
        total += 5;
        return total;

    } // end inner function
}(); // end outer function

addFive();
addFive();
console.log(addFive());


/* default parameter */
/* adding a default parameter to a function will allow you to call that function and supply a value for that parameter or not */
function subtractThis(value4, value5) {
    return value4 - value5;

} // end function

/* function called using both variables. The default value in the parameter is ignored. */

console.log(subtractThis(15, 7));

/* Function called only using the value, which is used for the first parameter. The default parameter will be used since it was not supplied when the function is called. */
console.log(subtractThis(34));

/* rest parameter */
/* allows for an indefinate number of arguments as an array*/
function groupSample(...args) {
    console.log(args);

}

/*calling this function with a comma seperated set of information. This information is the arguments */
groupSample('welcome','to','Javascript', 10,15,20);

/* Arrow functi0ons */
/* A compact version of fun ction expression. */


/* Traditional annonymous Function (Function Expression) */
const we = function(value) {
    return value + 100;
}

console.log(we(15));

/* Arrow function of the above function */
const me = value50 => value50 + 100;

console.log(me(15));

/* Traditional way */
const example2 = function(num1,num2) {
    return num1 + num2;
} // end function

/* Arrow function version of above */
const example2b = (num3, num4) => num3 + num4;

console.log(example2(23,64));
console.log(example2b(23,64));

/* Traditional way - No parameter */
const example3 = function() {
    return 10 + 5;

} // end function

/* Arrow function version of above */
const example3b = () => 10 + 5;

console.log(example3());
console.log(example3b());
