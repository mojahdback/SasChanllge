let numbers = [12, 5, 31, 8, 19];

let max = numbers[0];
let min = numbers[0];

for(let i=0 ; i<numbers.length ;i++){
    if(numbers[i] > Max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}

console.log("the max is :" + max);
console.log("the max is :" + min);
