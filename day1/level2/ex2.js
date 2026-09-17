// Count Vowels (Loop): Declare a string variable.
//  Use a for loop to iterate over each character of the string and count how many vowels (a, e, i, o, u) it contains.

let word = "mohammed";
let vowels = 0 ;
for(let i = 0 ; i < word.length ; i++){
    if(word[i] == "a" || word[i] == "e" || word[i] == "i"
        || word[i] == "u" || word[i] == "o"
    ){
        vowels += 1  ;
    }
    
}

console.log("you have " + vowels + " vowels");
