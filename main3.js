// Part3:

// Q1:
function myName(){
    var myName = "Alfred Damian";
    return myName;
};

// Q2:
favoriteFood = ["pizza", "ice cream"];
function randomFood(){
    if(Math.random > 0.5){
        return favoriteFood[0];
    } else{
        return favoriteFood[1];
    }
}

// Q3:
numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
    for(var i=0; i<numbers.length; 1+=2){
        console.log(numbers[i]);
    };
}

// Q4:
function displayEvenNumbers(){
    for(var i=1; i<numbers.length; i+=2){
        console.log(numbers[i]);
    };
};

// Q5:
function returnFirstOddNumber(){
    for(var i=0; i<numbers.length; i+=2){
        console.log(numbers[i]);
        i=0;
        break;
    }
}

// Q6:
function returnFirstEvenNumber(){
    for(var i=0; i<numbers.length; i+=2){
        console.log(numbers[i]);
        i=1;
        break;
    }
}


// Q7:
function returnFirstHalf(){
    for(var i=0; i<numbers.length; i++){
        if(numbers[i]<6){
        console.log(numbers[i])
    };
    }
}


Q8:
function returnSecondtHalf(){
    for(var i=0; i<numbers.length; i++){
        if(numbers[i]>5){
        console.log(numbers[i])
    };
    }
}
