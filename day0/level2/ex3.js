// Leap Year Checker: Declare a year variable. Write a condition to check if it's a leap year (divisible by 4 AND NOT divisible by 100, UNLESS it's divisible by 400). Log true or false.

let year = 2025 ;
if((year % 4 == 0 && year % 100 != 0) || ( year % 400 == 0)){
    console.log("this " + year + " it's a leap year");

}

else {
    console.log("is not a leap year");
}