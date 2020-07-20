// Question 7i:

function printDay(num){

    var daysOfTheWeek = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return daysOfTheWeek[num];
  }
  
//   Output:
//   undefined
//   printDay(5);
//   "Thursday"

// Question 7ii:

function lastElement(arr){
    var arr;
    for(var i=0; i < arr.length; i++){
        return arr.pop();
}
};


// Question 7iii:

function numberCOmpare(number1, number2){
    var number1;
    var number2;
    if(number1 > number2){
        return "First is grater";
} else if (number1<number2){
        return "Second is greater";
} else{
        return "Numbers are equal";
}
};



// Question 7iv:

function singleLetterCount(string, letter){
    var totalCount = 0;
    for(var i = 0; i < string.length; i++){
           if(string[i].toLowerCase() === letter.toLowerCase()){
            totalCount++;
}    
}
return totalCount;
};

// Output:
// singleLetterCount("accomodation", "a");
// 2


// Question 7vi:

function arrayManipulation(arr, command, location, value){
    if (command === "remove" && location === "end"){
        return arr.pop();
        }
    else if(command === "remove" && location === "beginning"){
            return arr.shift();
        }
    else if(command === "add" && location === "beginning"){
            arr.unshift(value); return arr;
        }
    else if(command === "add" && location === "end"){
             arr.push(value); return arr;
        }
    else {
            return arr;
        }
}


// Output:
// undefined
// arrayManipulation([1,2,3], "add", "beginning", 20); 
// (4) [20, 1, 2, 3]
// arrayManipulation([1,2,3], "add", "end", 30); 
// (4) [1, 2, 3, 30]