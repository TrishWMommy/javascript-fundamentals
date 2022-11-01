/* if statement */
/* The scope of the if statement will execute only if the condition is true. Unless you use the ! logical operator */
function ifExample(value1) {
    console.log('Before if statement'); 
    if (value1 > 9) {
        console.log(`value of ${value1} is larger than 9`);

    } // end if
    console.log('After if statement');


} // end function


ifExample(2);

/* if else statement */
/* The else statement will execute only when the if condition is false, accept in cases where the ! logical operator is used. */
function elseExample(value2) {
    if(value2 == "HomeWork") {
        console.log('The value was true');
    } else {
        console.log('The value was false');

    } // end else function

    } // end function


/* The switch statement */
/* This statement can replace an if else chain where the condition is about equality. the break keyword is needed to end a case so the switch can finish. If you dont include a break, the case will join the next case. */
function favoriteColor(color) {
    switch(color) {
        case 'Green'.toLowerCase():
        console.log('My favorite color is green or Green');
        break;
        case 'Pink'.toLowerCase(): 
        case 'pink':
        console.log('My favorite color is Pink'); 
        break;
        case 'White'.toLowerCase():
        console.log('My favorite color is white or White');
        break;
        default:
            console.log(`My favorite color is ${color}`);
            break;

    } // end switch
} // end function

favoriteColor('Pink');
