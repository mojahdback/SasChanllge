 
// Challenge 8 — Remove Duplicates Manually
let numbers = [1,2,2,3,1,1,3,4,1,5,4];
let frq = []
let array = [];
let count ;

for(let i=0 ; i < numbers.length ; i++){
    frq[i] = -1 ;
}

for(let i=0 ; i< numbers.length ; i++ ){
    count =1 ;
    for(let j = i+1; j < numbers.length ; j++){
        if(numbers[i] == numbers[j]){
           frq[j] = 0;
           count++
        }
    }
    if(frq[i] !== 0){
        frq[i] =count ;
    }


}

for(let i =0 ; i<frq.length ; i++){
    if(frq[i] >= 1){
        array.push(numbers[i]);

    }
}

console.log(array);