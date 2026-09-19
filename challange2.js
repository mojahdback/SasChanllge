
// function repet(text){
//     // let count = 0 ;
//     let repet = [];

//     for(let i = 0 ; i< text.length ; i++){
//         for(let j = 0 ; j<text.length ;j++){
//             if(text[i] == text[j]){
//                repet.push(text[i]);
//             }
//         }
//     }

//     return repet ;

// }

let name = "ahmedm"
let t = []
for(let  i=0 ; i< name.length ; i++ ){
    for(let j = 1 ; j< name.length ; j++){
        if(name[i] == name[j]){
            t.push(name[i]);

        }
    }
}



console.log(t);