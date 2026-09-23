// Key/Value Iteration: Write a for...in loop to iterate over an object and log each key and its corresponding value.
const products = {
  phone: 500,
  laptop: 1200,
  headphones: 150,
  tablet: 700
};


for(key in products){
    console.log(`${key} => ${products[key]}`)
}