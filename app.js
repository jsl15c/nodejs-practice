// function placeOrder(orderNumber) {
//   console.log("customer order " + orderNumber);
//   cookAndDeliver(function() {
//     console.log("delivered food order " + orderNumber);
//   });
// }
//
// // simulate a 5 second operation
// function cookAndDeliver(callback) {
//
//   setTimeout(callback, 5000);
//
// }
//
// // simulate users web request
// placeOrder(1);
// placeOrder(2);
// placeOrder(3);
// placeOrder(4);
// placeOrder(5);
// placeOrder(6);


var jarrod = {
  favFood:"salmon",
  favMovie:"Toy Story"
};

var person = jarrod;

person.favFood = "salad";

console.log(jarrod);
