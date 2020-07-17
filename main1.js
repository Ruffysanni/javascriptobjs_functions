// Part1:
// Q1:
var newObject = {
    firstName: "Tamuno",
    lastName: "David",
    occupation: "Developer"
}
console.log(newObject);

// Q2 with dot notation:
console.log(newObject.firstName);
newObject["firstName"];
console.log(newObject.lastName);
newObject["lastName"];
console.log(newObject.occupation);
newObject["occupation"];



// Q3: showing the newObjects
newObject["hobby"] = "Basketball";
delete newObject.occupation;

console.log(newObject);

// Q4:
// 4.	We can use the bracket notation when the key has special characters like spaces but can’t use the dot notation.

// Q5: namesAndHobbies
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}
// console.log(namesAndHobbies.matt + " " + "=>" + Object.keys(namesAndHobbies)[1]);
// console.log(namesAndHobbies.matt + " " + "=>" + Object.keys(namesAndHobbies)[2]);
// console.log(namesAndHobbies.matt + " " + "=>" + Object.keys(namesAndHobbies)[3]);
// console.log(namesAndHobbies.matt + " " + "=>" + Object.keys(namesAndHobbies)[4]);

// Q6:
namesAndHobbies["developer"] = "Imran";
namesAndHobbies["favoriteHobby"] = "skating";

// Q7:
if ("developer" in namesAndHobbies){
    console.log(Object.values(namesAndHobbies)[4] + " " + namesAndHobbies.favoriteHobby);
};

