/* Create a map in a function */
function getColors() {
    const color = new Map();
    color.set('PINK');
    color.set('TEAL');
    color.set('LAVENDER');
    color.set('WHITE');
    color.set('BROWN');
    color.set('GREEN');
 return color;
} // end function

/* get the number of map pairs */



const colorsMapSize = getColors().size
console.log(colorsMapSize);

//  getEntries();

/* forEach instance method */

// Callback function
function colorElement(value, key) {
    console.log(`${key} is for ${value}`);
} // end function

// foreach method
function colorForEach() {
    let myColors = getColors();
    myColors.forEach(colorElement);

} // end function

// colorForEach();



