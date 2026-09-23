// Oldest Person: Given an array of person objects (each with a name and age),
//  write a function to find and return the name of the oldest person.

let persons = [
    {
        name : "ali",
        age : 19
    },
    {
        name : "mohamed",
        age : 29
    },
    {
        name : "sara",
        age : 16
    },
    {
        name : "omar",
        age : 32
    },
    {
        name : "lokman",
        age : 6
    }
]

let maxAge = persons[0].age

let maxName = persons[0].name

for(key in persons){
    if(persons[key].age > maxAge) {
        maxAge = persons[key].age
        maxName = persons[key].name
    }
}

console.log(maxAge);
console.log(maxName);


// persons.forEach(person => {

//     if(person.age > maxAge){
//         maxAge = person.age ;
//     }
    
// });

// console.log(maxAge);


