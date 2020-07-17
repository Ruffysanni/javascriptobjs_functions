// Part2:

// Q1:
Object.values(programming)[0].push("Go");
Object.values(programming)[0];

// Q2:
programming["difficulty"]=7;

// Q3:
delete programming.jokes;


// Q4:
programming["isFun"]=true;


// Q5:
for(var i=0 in Object.values(programming)[0]){
    console.log(Object.values(programming)[0][i]);
};


// Q6:
for(var i=0 in Object.keys(programming)){
    console.log(Object.keys(programming)[i]);
};

// Q7:
for(var i=0 in Object.values(programming)){
    console.log(Object.values(programming)[i])
}