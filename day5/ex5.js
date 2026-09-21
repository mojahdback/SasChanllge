let text = "JavAScript is amazIng";
let vowels = "aeiou"

let count = 0;

for(let i = 0; i < text.length   ; i++){
    for(let j =0 ; j< vowels.length   ; j++){
        if(text[i].toUpperCase() == vowels[j].toUpperCase()){
            count++;
        }

    }
  

}

console.log(count);