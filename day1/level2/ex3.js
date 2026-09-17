// Square of Stars: Use nested loops to print a 5x5 square of asterisks (*) in the console.

let l = 5 , r = 5;
for(let i = 1 ; i <= l ; i++){
    let row = " " ;
    for(let j = 1 ; j <= r ; j++){
        row += "* ";
    }
    console.log(row);
   

}