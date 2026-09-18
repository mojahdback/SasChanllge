

// ibonacci Sequence: Use a loop to print the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...).

let a = 0 ;
let b = 1 ;

let t = [];

for(let i = 1 ; i<=10 ; i++){
    t.push(a);

    let temp = a + b
    a = b ;
    b = temp ;


}

console.log(t);
