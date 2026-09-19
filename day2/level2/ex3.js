// Day 2: Functions & Arrow Functions
// Level 2 (Intermediate)
// Factorial Calculator: Write a function factorial(n) that uses a loop inside it to calculate and return the factorial of n.

function factorial(n){
    let result = 1 ;

    for(let i = 1; i <= n ; i++){
        result *= i;

    }
    return result;
}


console.log(factorial(5));