# Shopping Cart Price Calculator


The project demonstrates the use of **JavaScript concepts** like:  
- Arrays and Objects  
- Loops (`for...of`)  
- Array methods (`map()`)  
- Number conversion (`parseInt()`, `parseFloat()`)  
- Math methods (`Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.max()`, `Math.min()`, `Math.random()`)  
- String formatting (`toFixed()`)  
- Conditional checks (`isNaN()`)  
- Template literals  


## Features

1. **Calculate Total Price**  
   - Loops through the cart items and sums their prices.  
   - Supports decimal prices using `parseFloat()`.  

2. **Apply Discount**  
   - Deducts a discount value (string converted to number using `parseInt()`).  

3. **Apply Tax (GST)**  
   - Applies tax as percentage (string converted using `parseFloat()`).  

4. **Round Final Price**  
   - Shows final price rounded to nearest integer, rounded up, or rounded down using `Math` methods.  

5. **Check for Valid Calculations**  
   - Ensures final price is a valid number using `isNaN()`.  

6. **Most Expensive & Cheapest Item**  
   - Finds highest and lowest priced items in the cart using `Math.max()` and `Math.min()`.  

7. **Random Lucky Discount**  
   - Generates a random discount between 1 and 1000 using `Math.random()`.  

---

## Code Example

```javascript
let cart = [
  { name: "Laptop", price: "49999.99" },
  { name: "Mouse", price: "999.5" },
  { name: "Keyboard", price: "1499.25" },
  { name: "USB Cable", price: "299" }
];

let discountStr = "500"; // ₹ discount
let taxPercentStr = "18"; // 18% GST

let discount = parseInt(discountStr);
let taxPercent = parseFloat(taxPercentStr);

let total = 0;
for (let item of cart) {
  total += parseFloat(item.price);
}

let discountedTotal = total - discount;
let finalPrice = discountedTotal + (discountedTotal * taxPercent / 100);
finalPrice = finalPrice.toFixed(2);

if (isNaN(finalPrice)) {
  console.log("Error: Invalid price calculation!");
} else {
  console.log(`Total Price after discount and ${taxPercent}% GST: ₹${finalPrice}`);
}

console.log("Rounded Total (nearest integer): ₹" + Math.round(finalPrice));
console.log("Rounded Down: ₹" + Math.floor(finalPrice));
console.log("Rounded Up: ₹" + Math.ceil(finalPrice));

let prices = cart.map(item => parseFloat(item.price));
console.log("Most expensive item price: ₹" + Math.max(...prices));
console.log("Cheapest item price: ₹" + Math.min(...prices));

let luckyDiscount = Math.floor(Math.random() * 1000) + 1;
console.log(`Lucky discount for you today: ₹${luckyDiscount}`);

Example Output
Total Price after discount and 18% GST: ₹61583.79
Rounded Total (nearest integer): ₹61584
Rounded Down: ₹61583
Rounded Up: ₹61584
Most expensive item price: ₹49999.99
Cheapest item price: ₹299
Lucky discount for you today: ₹457
