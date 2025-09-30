# JavaScript Strings and Template Literals Example
This demonstrates **JavaScript string manipulation** using various techniques and methods. It covers:  
- String concatenation  
- Template literals  
- Escaping characters  
- String methods (`toUpperCase()`, `toLowerCase()`, `includes()`, `length`, `slice()`, `replace()`)  
- Joining arrays into strings  
- Multi-line template literals  



## User and Cart Data

```javascript
let user = {
  name: "Sowmiya",
  city: "Coimbatore",
  age: 22
};

let cart = {
  items: ["Apple", "Banana", "Orange"],
  totalItems: 10,
  totalPrice: 390
};

String Concatenation

let welcomeMessage = "Hello " + user.name + "! Welcome to our shop.";
console.log(welcomeMessage);


Output:

Hello Sowmiya! Welcome to our shop.


Template Literals

Allows easy insertion of variables and expressions using ${...}.

let summary = `Hi ${user.name}, you are ${user.age} years old and from ${user.city}.`;
console.log(summary);


Output:

Hi Sowmiya, you are 22 years old and from Coimbatore.


Escaping Characters

Use \n for new lines and \" for quotes.

console.log("Note: You can buy max 5 items per product.\nHappy Shopping!");


String Methods

Join array items into a string:

let cartItems = cart.items.join(", ");


Convert to uppercase:

console.log("Your cart contains: " + cartItems.toUpperCase());


Check if string contains a word:

if (cartItems.toLowerCase().includes("banana")) {
  console.log("Banana is in your cart!");
}


Get length of string:

console.log(`Total characters in your cart list: ${cartItems.length}`);


Extract a part of string with slice:

console.log(`First 5 characters of your cart list: ${cartItems.slice(0, 5)}`);


Replace a word in string:

let newCartMessage = cartItems.replace("Orange", "Mango");
console.log("Updated cart items: " + newCartMessage);


Multi-line Template Literals

Combine variables and multiple lines without + or \n.

console.log(`
${user.name}, your shopping summary:
- Total Items: ${cart.totalItems}
- Total Price: ₹${cart.totalPrice}
- Items: ${cartItems}                      
`);

Example Output
Hello Sowmiya! Welcome to our shop.
Hi Sowmiya, you are 22 years old and from Coimbatore.
Note: You can buy max 5 items per product.
Happy Shopping!
Your cart contains: APPLE, BANANA, ORANGE
Banana is in your cart!
Total characters in your cart list: 18
First 5 characters of your cart list: Apple
Updated cart items: Apple, Banana, Mango

Sowmiya, your shopping summary:
- Total Items: 10
- Total Price: ₹390
- Items: Apple, Banana, Orange
