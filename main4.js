// Part4:

Question A.i:
function add(number1, number2){
    return number1 + number2;
};

// Question A.ii:
function subtract(number1, number2){
    return number1 - number2;
};

// Question A.iii:
function multiply(number1, number2){
    return number1 * number2;
};

// Question A.iv:
function divide(number1, number2){
    return number1 / number2;
};


// Question B:

function sayHello(name){
    var name;
if(name === "Tim"){
    console.log("Hello Boss");
} else if (name !== "Tim"){
    console.log("Hello "+ name);
}
    return "Hello "+ name;
};


// Question C:

function average(arr){
    var total = 0;
    for (var i=0; i<arr.length; i++){
        total = total + arr[i];
    }

    return (total/arr.length);
};


// Question D:

function createStudent(name1, name2){
    var firstName = "name1";
    var lastName = "name2";

    return {
        firstName: "firstName", lastName: "lastName"
    }
};


// Question E:

// Question F:

function findStudentByFirstName(string){
    for(var i=0; i < students.length; i++){
     if(string.toLowerCase() === students[i].toLowerCase()){
             return true;
         }
 
}
         return false;

};

// Output:
// undefined
// findStudentByFirstName("tiM");
// true
// findStudentByFirstName("Janey");
// false



// Question G:

function extractEveryThird(arr){
    var newArray = [];
    for(var i=0; i <arr.length; i+=3){
        newArray.push(arr[i]);
    }

    return newArray;
}


// Output:
// extractEveryThird([2,5,6,1,4,7,8,5,4,9])
// (3) [6, 7, 4]



// Question H:

function createCalculator(){
            
    return {
            add: function add(number1, number2){
return number1 + number2;
},
    subtract: function subtract(number1, number2){
return number1 - number2;
},
    multiply: function multiply(number1, number2){
return number1 * number2;
},

    divide: function divide(number1, number2){
return number1 / number2;
}

}

};


// 



// Question I:

var myVar = "Hello from global";
function scopePractice() {
   var myVar = "Hello from function scope";
}

// undefined
// scopePractice();
// undefined
// console.log(myVar)
// >Hello from global

var tricky = "Hello from global";
function trickyScopePractice() {
    tricky = "Hello from function scope";
}
console.log(tricky);

// Hello from global


