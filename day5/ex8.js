// Create a new array containing each value only once.

let numbers = [1, 2, 2, 3, 1, 4, 3,3];
let array = []
let frq = []

for(let i =0 ;i<numbers.length  ; i++){
    for(let j = i+1 ; j< numbers.length  ; j++){
         if(numbers[i] == numbers[j]){
             if(!array.has(numbers[i]))
               array.push(numbers[i]);
        }

    }
   
}

console.log(array);


// [1, 2, 3, 4]