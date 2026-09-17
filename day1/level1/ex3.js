// Multiplication Table: Choose a number (e.g., 5).
//  Use a for loop to print its multiplication table from 1 to 10 (e.g., "5 x 1 = 5", "5 x 2 = 10").

let num = 5 ;
let result ;
for(let i = 1 ; i <= 10 ; i++){
    result = num * i ;
    console.log(`${num} * ${i} = ${result}`);

}