// Valid Triangle: Declare three variables representing the angles of a triangle. Check if they form a valid triangle (all three add up to exactly 180, and no angle is 0 or less).

let ang1 = 30 , ang2 = 30 , ang3 = 130 ; 
let total = ang1 + ang2 + ang3 ; 

if(total == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0 ){
    console.log("triangle is valid ");

}

else {
    console.log("no valide");
}
