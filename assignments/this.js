/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the
value of ${this} inside that funvtion will be the window object.

* 2. Implicit binding occurs when dot notation is used to invoke a function

* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    console.log("Hello " + name);
    console.log(this);
}

greetMe("Jane");

//greetMe("Jane"); == window.greetMe("Jane");
------

// Principle 2

// code example for Implicit Binding



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
