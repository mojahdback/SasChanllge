// In-Stock Filter: Given an array of product objects (each with name, price, and inStock boolean),
//  return a new array containing only the products that are in stock.


let products = [
     {
    name : "PC" ,
    price: 234  ,
    inStock: true
    },
    {
    name : "Ifone12" ,
    price: 1029  ,
    inStock: false
    },
    {
    name : "MW3" ,
    price: 192034  ,
    inStock: true
    },
    {
    name : "RAN324" ,
    price: 405303  ,
    inStock: false
    }
]

let array = []

for(key in products){
    if(products[key].inStock == true){
        array.push(products[key])
    }

}

console.log(array)


