// User data
let user = {
  name: "Sowmiya",
  city: "Coimbatore",
  age: 22
};

// Shopping cart data
let cart = {
  items: ["Apple", "Banana", "Orange"],
  totalItems: 10,
  totalPrice: 390
};

//  String Concatenation
let welcomeMessage = "Hello " + user.name + "! Welcome to our shop.";
console.log(welcomeMessage);

//  Template Literals (allow you to easily insert variables or expressions inside a string using ${...}.)
let summary = `Hi ${user.name}, you are ${user.age} years old and from ${user.city}.`;
console.log(summary);

//  Escaping Characters
console.log("Note: You can buy max 5 items per product.\nHappy Shopping!");

//  String Methods
let cartItems = cart.items.join(", "); // join array into string
console.log("Your cart contains: " + cartItems.toUpperCase()); // toUpperCase method

// Check if specific item is in cart
if (cartItems.toLowerCase().includes("banana")) {      //.includes() → checks if a substring exists inside a string.
    console.log("Banana is in your cart!");
}

//  Length of string
console.log(`Total characters in your cart list: ${cartItems.length}`);

//  Slice method
console.log(`First 5 characters of your cart list: ${cartItems.slice(0, 5)}`); //it only see the characters

//  Replace method
let newCartMessage = cartItems.replace("Orange", "Mango");
console.log("Updated cart items: " + newCartMessage);

//  Multi-line template literal(it allows variable insertion + multi-line text without + and \n.)
console.log(`
${user.name}, your shopping summary:
- Total Items: ${cart.totalItems}
- Total Price: ₹${cart.totalPrice}
- Items: ${cartItems}                      
`);
