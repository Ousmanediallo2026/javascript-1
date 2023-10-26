// Creating variable in Javascript

// Variables declared with var are function-scoped, 
// meaning they are accessible anywhere within the
//  function in which they are declared. They are not block-scoped.

var varVariable = 'Var Example';
console.log(varVariable); // Accessible throughout the code


//Variables declared with let are limited in scope to the block,
//  statement, or expression in which they are used. 
//  They are commonly used when you need to reassign the variable later.


let letVariable = 'Let Example';
console.log(letVariable); // Accessible within the code block


// const: Also introduced in ES6, const is used to declare constants.
//  The value of a constant cannot be changed through reassignment, 
//  and it remains constant throughout the code. Like let, const is block-scoped.

const PI = 3.14159;
console.log(PI); // 3.14159


// Use descriptive names: Choose meaningful and descriptive names 
// that indicate the purpose or content of the variable.

// Use camelCase: Start variable names with a lowercase letter and use 
// uppercase letters to denote the start of subsequent words. For example, myVariableName.

// Avoid using reserved keywords: Do not use JavaScript reserved keywords as variable names.

// Be consistent: Maintain a consistent naming convention throughout your codebase.


// Descriptive and meaningful names
let userName = "John Doe";
let itemCount = 5;

// Constants in uppercase
const MAX_SIZE = 100;
const PI_VALUE = 3.14;



// In JavaScript, the typeof operator is used to determine the data type of a given variable or value.
//  It returns a string indicating the type of the operand. Here are some examples of using the typeof operator:


let num = 10;
console.log(typeof num); // "number"


let str = "Hello, World!";
console.log(typeof str); // "string"



let bool = true;
console.log(typeof bool); // "boolean"


let undefinedVariable;
console.log(typeof undefinedVariable); // "undefined"


let obj = { name: 'John', age: 30 };
console.log(typeof obj); // "object"


function greet() {
    console.log('Hello!');
}
console.log(typeof greet); // "function"


let nullVariable = null;
console.log(typeof nullVariable); // "object"
