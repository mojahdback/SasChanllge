// Basic Calculator: Declare variables num1, num2, and operator (a string like "+", "-", "*", "/"). Use a switch statement to perform the correct math operation and log the result. Handle division by zero.

let num1 = 23 , num2 = 29;
let oper = "/";
let result ;

switch(oper){
    case "+" : result = num1 + num2 ;
            console.log(`the result is ${result}`);
            break;
     case "-" : result = num1 - num2 ;
            console.log(`the result is ${result}`);
            break;
     case "*" : result = num1 * num2 ;
            console.log(`the result is ${result}`);
            break;
     case "/" : result = num1 / num2 ;
                if(num1 > num2){
                     console.log(`the result is ${result}`);
                }
                else{
                    console.log("the num1 small than num2");
                }
                break;
    default : console.log("error");
             break ;
}
