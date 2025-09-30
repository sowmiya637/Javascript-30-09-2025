# Shopping Cart Object

## Project Overview
This project demonstrates a **shopping cart** implemented as a **JavaScript object** with nested objects.  
It shows how to manage items, calculate total quantity and price, display owner information, and use various **object and array methods** in a real-world scenario.

**Key Concepts Covered:**
- JavaScript Objects & Nested Objects
- Methods inside Objects
- Destructuring
- Object Methods: `Object.keys()`, `Object.values()`, `Object.entries()`
- Array Methods: `map()`, `reduce()`, `forEach()`
- Template Literals

---

## Features

1. **Owner Info**
   - Displays cart owner and address using `showOwner()` method.
2. **Total Items**
   - Calculates total quantity of all items using `totalItems()` method.
3. **Total Price**
   - Calculates total price of all items using `totalPrice()` method.
4. **Show Items**
   - Displays each item with quantity, price, and total using `showItems()` method.
5. **Object Methods Usage**
   - `Object.keys()` → Get item names
   - `Object.values()` → Get item values
   - `Object.entries()` → Get key-value pairs

---

## Code Example

```javascript
let shoppingCart = {
  owner: "Sowmiya",
  address: { city: "Coimbatore", state: "TN" },
  items: {
    apple: { price: 50, quantity: 2 },
    banana: { price: 30, quantity: 3 },
    orange: { price: 40, quantity: 5 }
  },

  showOwner: function() {
    console.log(`Cart Owner: ${this.owner}`);
    console.log(`City: ${this.address.city}, State: ${this.address.state}`);
  },

  totalItems: function() {
    let quantities = Object.values(this.items).map(item => item.quantity);
    return quantities.reduce((sum, qty) => sum + qty, 0);
  },

  totalPrice: function() {
    let entries = Object.entries(this.items);
    return entries.reduce((total, [item, details]) => total + details.price * details.quantity, 0);
  },

  showItems: function() {
    console.log("Items in Cart:");
    Object.entries(this.items).forEach(([item, { price, quantity }]) => {
      console.log(`${item} → Quantity: ${quantity}, Price: ${price}, Total: ${price * quantity}`);
    });
  }
};

// Destructuring owner and address
let { owner, address: { city, state } } = shoppingCart;
console.log(`Owner: ${owner}, City: ${city}, State: ${state}`);

// Object methods usage
console.log("Item Names:", Object.keys(shoppingCart.items));
console.log("Item Quantities:", Object.values(shoppingCart.items).map(i => i.quantity));
console.log("Item Details:", Object.entries(shoppingCart.items));

Example Output
Owner: Sowmiya, City: Coimbatore, State: TN
Item Names: [ 'apple', 'banana', 'orange' ]
Item Quantities: [ 2, 3, 5 ]
Item Details: [
  [ 'apple', { price: 50, quantity: 2 } ],
  [ 'banana', { price: 30, quantity: 3 } ],
  [ 'orange', { price: 40, quantity: 5 } ]
]
