// loopForEach();

const flavors = ['chocolate', 'vanilla', 'strawberry', 'black walnut', 'pineapple', 'butter pecan', 'rocky road', 
'neopolatin', 'banana split', 'banana pudding',];

/* The join instance method returns concatenated string
of the elements of the array including a seperate defined in 
the join method. */
function flavorsJoin() {
    let sale = flavors.join(' & ');
    console.log(sale);

} // end function

// flavorJoin();

/* The slice method will create a shallow copy 
of an array that is smaller than the original. It 
creates a new array object */
function flavorSlice(start, end) {
    // ensure the parameters aer numbers
    const flavor2023 = flavors.slice(start, end);
    flavor2023.forEach(function flavorsresult (results) {
        console.log(results);

    });

} // end function

// flavorsSlice(0, 2);

/* The pop method will remove the last element of the array 
and return that element to variable */
function flavorsPop() {
    let myflavors = flavors.pop();
    // myflavor is assinged the single item as a result of the pop method
    console.log(myflavors);

    // print out the array again. Should be missing 1 element
    console.log(flavors);

} // end function

// flavorPop();

/* The push method will add one or more elements to 
the end of the array and return its lenght to a variable */
function flavorPush() {
    const addMore = flavors.push();
    // get the new length of the array
    console.log(addMore);
    console.log(flavors.length);

    // printout the array with new values added
    console.log(flavors);

} // end function

flavorPush();



/* The reverse method willm change the order of the elements
of the array to the oposite direction */
function flavorReverse() {
    const backward = flavors.reverse();
    // backward will display the elements in reverse order
    console.log(backward);
    // reverse is destructive because it affects the original array.

    // also changes the original array
    console.log(flavors);

} // end function

flavorReverse();

/* The shift method will remove the first element of the array and
return it to the variable. */
function flavorShift() {
    let icecream = flavors.shift();

    // icecream will be the first element from the shift
    console.log(icecream);

    // print out the array to show the element removed
    console.log(flavors);

} // end function

flavorShift()