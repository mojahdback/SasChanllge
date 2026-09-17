// Max of Three: Declare three number variables. Write conditions to find and log the largest of the three numbers without using Math.max.
let var1 = 20 , var2 = 240 , var3 = 60 ;
let max ; 
if(var1 > var2 && var1 > var3){
    max = var1 ;
}
else if(var2 > var1 && var2 > var3){
    max  = var2 ;
}
else {
    max = var3 ; 
}

console.log("Max is : " + max);
