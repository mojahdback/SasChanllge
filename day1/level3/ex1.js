// Prime Numbers: Use a loop to find and log all prime numbers between 1 and 50. (A prime number is only divisible by 1 and itself).

for (let i = 1; i <= 50; i++) {
    let p = 1;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            p =  0;
        }

    }

    if (p) {
        console.log(i);
    }
}