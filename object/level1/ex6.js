// Cart Total: Given an array of objects representing a shopping cart (each item has price and quantity), calculate the total cost of the cart.



let Carts = [
     {
    price: 1040  ,
    quantity: 23
    },
    {
    price: 1230  ,
    quantity: 7
    },
    {
    price: 984  ,
    quantity: 3
    },
    {
    price: 230  ,
    quantity: 5
    },
    {
    price: 1090  ,
    quantity: 11
    },
   
]



for(key in Carts){
    let cost = Carts[key].price * Carts[key].quantity
    console.log("total cost of the cart => " + cost);

}




