// User shopping cart items (price as string)..list of items array
let cart = [
  { name: "Laptop", price: "49999.99" },
  { name: "Mouse", price: "999.5" },
  { name: "Keyboard", price: "1499.25" },
  { name: "USB Cable", price: "299" }
];

// Discount and tax as strings
let discountStr = "500"; // ₹ discount
let taxPercentStr = "18"; // 18% GST

// Convert prices and discount/tax to numbers
let discount = parseInt(discountStr);      // parseInt()
let taxPercent = parseFloat(taxPercentStr); // parseFloat()

// Calculate total price
let total = 0;
for (let item of cart) {
  total += parseFloat(item.price); // parseFloat() for decimal prices
}

// Apply discount
let discountedTotal = total - discount;

// Apply tax
let finalPrice = discountedTotal + (discountedTotal * taxPercent / 100);

// Round final price to 2 decimals
finalPrice = finalPrice.toFixed(2); // toFixed()

// Check if finalPrice is a valid number
if (isNaN(finalPrice)) {
  console.log("Error: Invalid price calculation!");
} else {
  console.log(`Total Price after discount and ${taxPercent}% GST: ₹${finalPrice}`);
}

// Use Math methods
console.log("Rounded Total (nearest integer): ₹" + Math.round(finalPrice));
console.log("Rounded Down: ₹" + Math.floor(finalPrice));
console.log("Rounded Up: ₹" + Math.ceil(finalPrice));

// Find the most expensive and cheapest item
let prices = cart.map(item => parseFloat(item.price));   //.map() → creates a new array with transformed values.
console.log("Most expensive item price: ₹" + Math.max(...prices));
console.log("Cheapest item price: ₹" + Math.min(...prices));

// Random lucky discount
let luckyDiscount = Math.floor(Math.random() * 1000) + 1; // 1 to 1000
console.log(`Lucky discount for you today: ₹${luckyDiscount}`);
