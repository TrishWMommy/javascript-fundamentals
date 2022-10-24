/* lesson 7 - Conditional Statements */

/* if statement */
/* The scope of the if statement will execute only if the condition is true. Unless you use the ! logical operator */
function ifExample(value1) {
    console.log('Before if statement');
    if (value1 > 10) {
        console.log(`value of ${value1} is larger than 10`);

    } // end if
    console.log('After if statement');


} // end function

ifExample(2);

/* if else statement */
/* The else statement will execute only when the if condition is false, accept in cases where the ! logical operator is used. */
function elseExample(value2) {
    if(value2 == "JavaScript") {
        console.log('The value was true');
    } else {
        console.log('The value was false');

    } // end else function

    } // end function

elseExample('JavaScript1');

/* else if */
/* A chain of if else statements. Be aware of the order of the conditions. This is so conditions are not skipped. */
function elseIfExample(num1) {
    if(num1 <= 5) {
        console.log(`${num1} is less than or equal to 5`);
    }else if(num1 <= 10) { 
        console.log(`${num1} is less than 11, but higher than 5`);
    } else if(num1 <= 15) {

        console.log(`${num1} is less than 16, but higher than 10`)
    } else {
        console.log(`${num1} is greater than 15`);

    } // end else if

    } // end function

    elseIfExample(3);

/* Logical Operators && || used with if statements */
function logicalIfExample(num3, num4) {
    if(num3 == 10 && num4 > 10) {
        console.log('Both conditions were true');
    } else {
        console.log('Both conditions were false');
 
    } // end if/else

    if(num3 <= 9 || num4 > 20) {
 console.log('One of the conditions is true');
} else {
    console.log('Both conditions are false');
} // end if/else

} // end function

logicalIfExample(10, 12);


/* Using Ternaery Operator */
function ternaeryExample(able) {

    const example = (able > 10) ? `${able} is greater` : `${able} is less`;
    console.log(example);

} // end function

ternaeryExample(5);
/* The switch statement */
/* This statement can replace an if else chain where the condition is about equality. the break keyword is needed to end a case so the switch can finish. If you dont include a break, the case will join the next case. */
function favoriteColor(color) {
    switch(color) {
        case 'Blue'.toLowerCase():
        console.log('My favorite color is blue or Blue');
        break;
        case 'Red'.toLowerCase(): 
        case 'red':
        console.log('My favorite color is Red'); 
        break;
        case 'Green'.toLowerCase():
        console.log('My favorite color is green or Green');
        break;
        default:
            console.log(`My favorite color is ${color}`);
            break;

    } // end switch
} // end function

favoriteColor('Red');

