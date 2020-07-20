// QUestion 6a:

var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

// Output
// displayFirstName();
// "Tim"

// >>The output is "Tim" because the var firstName has already been declared in the global scope:

// Question 6b:

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();


// Output:
// "Tim"
// console.log(firstName);
//  undefined
//  >> The function will display the variable declared inside of it. But the console.log will make referemce to the global variable whicf was not defined nor declared.

// Question 6c:

console.log(firstName) // ?
var firstName = "Elie"


// Output:
// undefined

// >>It returns undefined because, it was consol logged before it was defined.


// Question 6d:

console.log(firstName);
firstName = 'Elie'


// Output:
// Elie
// "Elie"

// >> It outputs "Elie" because it's presumed that firstName has already been declared in the global scope.


// Question 6e:

function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}


// Output:
// undefined
// sayHi(); 
// "Hi undefined"

// >>The variable was used before it was defined. so it will return undefined.


// Question 6f:

function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}


// Output:
// undefined
// sayHi();
// "Hi Elie"

// >>the variable firstName has been declared outside the function scope.


// Question 6g:

sayHi()

function sayHi(){
    return 'Hi!';
}


// Output:
// "Hi!"

// >>It is returning a function.


// Question 6g:
sayHi();

var sayHi = function(){
    return 'Hi!';
}


// Output:
// "Hi!"

// >> Returns a function...