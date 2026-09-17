// BMI Calculator: Declare variables for weight (kg) and height (m). Calculate the BMI (weight / (height * height)). Log the BMI along with a category: "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (>=25).

let weight = 180 , height = 3 ;
let bmi = weight / (height * height) ;

if(bmi < 18.5){
    console.log("Underweight");
}
else if(bmi > 18.5 && bmi < 24.9){
    console.log("Normal");
}

else{
    console.log("Overweight");

}