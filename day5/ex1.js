let numbers = [4, 6, 2, 9, 10, 13];

let even=0 ;
let odd =0;

for(let i =0 ; i < numbers.length ;i++){
  
    if(numbers[i] % 2 == 0){
        even++;
    }
    else{
        odd++;
    }
}

console.log("Even : "+ even);
console.log("odd : "+ odd);


