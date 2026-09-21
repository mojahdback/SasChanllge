// A palindrome is a word that reads the same from left to right and right to left.
// level  -> true
// radar  -> true
// hello  -> false

let word = "level";
let drow = ""

const len = word.length

let palindrome  = true;

for(let i = word.length -1 ; i>=0; i--){
    drow += word[i];
   
}

for(let i =0 ; i< len  ; i++){
      if(word[i] !== drow[i]){
        palindrome = false;
        break;

    }
   
}

if(palindrome){
    console.log("its Palindrome");
}
else{
    console.log("Not Palindrome");
}