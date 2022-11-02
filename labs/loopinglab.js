/* While loop */
/* This loop will continue as long as the condition is true.
The condition is checked before the body of the loop, is executed */

function whileExample() {
    let value = 5;
    while(value < 26) {
        console.log(value);
        value++;

    } // end while
} // end function

whileExample();

/* Display the divisible numbers from 0 to 30 */
function divisibleNumbers() {
    for(let num2 = 0; num2 <= 30; num2++) {
        if (num2 % 3 == 0) {
            console.log(`${num2} is divisible`);
    }

} // end for
} // end function

divisibleNumbers();


