let sentence = "JavaScript requires logical thinking";

let words = sentence.split(" ")

let arr = [];

let len = words.length 

for(let i =0 ; i< len ; i++){
    arr.push(words[i].length)
}

let Max = arr[0]
let value = words[0]
for(let i= 0 ; i<len ; i++){
    if(arr[i] > Max){
        Max = arr[i];
        value = words[i];
    }
}


console.log(Max)
console.log(value)