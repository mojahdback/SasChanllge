let numbers = [12, 5, 20, 8, 20, 17];

let Max1 = numbers[0]
let Max2 = numbers[0]

for(let i =1 ;i< numbers.length ; i++){
    if(numbers[i] > Max1){
        Max2 = Max1
        Max1 = numbers[i]
    }
    if(Max2 < numbers[i] &&  Max1 > numbers[i]){
        Max2 = numbers[i];
    }
}


console.log(Max2)