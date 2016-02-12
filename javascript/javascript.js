function calculation(){
    var result = "";
    var sum = 0;
    for (var i=0; i<=500; i++) {
        if (i%23==0) {
            result = result + "\t" +i
            sum = sum + i
        };
    };
    console.log("Elements => " + result);
    console.log("Sum => " + sum);
}




// Example of a for loop: 1 to 11

for (var counter = 1; counter < 11; counter++) {
    console.log(counter);
}

// omcrements of 23
function increments() {
   
   for (var i = 0; i < 500; i+= 23) {
        console.log(i)};
    };


    // Example for loop

for (var i = 8 ; i < 120; i+=12) {
    console.log(i);
}

// 100 to 5 in 5 incerments
for( var i = 100 ; i > 0 ; i-=5) {
    console.log(i);
    } 


// Click on "Stuck? Get a hint!" if you get stuck!

var names ["tab", "nab", "flab", "hab", "tony"]

for(var i = 0 ; i < name.lenght ; i ++){
    console.log("I know someone called " + names[i]);
}