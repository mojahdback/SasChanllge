let numbers = [-4, 7, 0, -2, 9, 0, 3];

// negative = [-4, -2]
// zeros = [0, 0]
// positive = [7, 9, 3]

let negative =[]
let zeros = []
let positive =[]

for(let i =0 ; i< numbers.length ; i++){
    if(numbers[i] == 0 ){
        zeros.push(numbers[i])
    }
    else if(numbers[i] <  0 ){
        negative.push(numbers[i])

    }
    else{
        positive.push(numbers[i])
    }
}

console.log("negative : " + negative)
console.log("zeros : " + zeros)
console.log("positive : " + positive)