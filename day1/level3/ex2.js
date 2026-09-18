// Right-Angled Triangle: Use nested for loops to draw a right-angled triangle of stars in the console (height of 5).

const p = require("prompt-sync")();

let L ;

L = p("Enter a number L : ");

for(let i =1 ; i<=L ; i++){
    for(let j =1 ; j<= i ; j++){
       process.stdout.write("* ");
    }
    console.log("\n");

}

