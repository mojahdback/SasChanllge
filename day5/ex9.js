// Challenge 9 — Find the Most Frequent Number 
let numbers = [4, 2,3, 4, 3, 2, 3,4,3, 5];
let frq = []
let count ;

for(let i=0 ; i < numbers.length ; i++){
    frq[i] = -1 ;
}

for(let i=0 ; i< numbers.length ; i++ ){
    count = 1 ;
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

let MaxRepet = frq[0];
let MaxValue = numbers[0];

for(let i =0 ; i<numbers.length ; i++){
    if(frq[i] > MaxRepet){
        MaxRepet = frq[i];
        MaxValue = numbers[i];

    }
}
    

console.log(MaxValue + " appears "+ MaxRepet + " times");