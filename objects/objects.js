//  Define shopping cart object with nested objects
let shoppingCart = {
  owner: "Sowmiya",
  address: {
    city: "Coimbatore",
    state: "TN"
  },
  items: {
    apple: { price: 50, quantity: 2 },
    banana: { price: 30, quantity: 3 },
    orange: { price: 40, quantity: 5 }
  },

  //  Method to display owner info
  showOwner: function() {
    console.log(`Cart Owner: ${this.owner}`);
    console.log(`City: ${this.address.city}, State: ${this.address.state}`);
  },

  //  Method to calculate total items
  totalItems: function() {
    let quantities = Object.values(this.items).map(item => item.quantity);  //.map() → creates new array with only quantities.
    return quantities.reduce((sum, qty) => sum + qty, 0);   //reduces array to a single value by summing all numbers.
  },

  //  Method to calculate total price
  totalPrice: function() {
    let entries = Object.entries(this.items);
    return entries.reduce((total, [item, details]) => total + details.price * details.quantity, 0);
  },

  //  Method to show all items
  showItems: function() {
    console.log("Items in Cart:");
    Object.entries(this.items).forEach(([item, {price, quantity}]) => {   //.forEach() → loop through each key-value pair in the array.
      console.log(`${item} → Quantity: ${quantity}, Price: ${price}, Total: ${price * quantity}`);
    });
}
}; 
let { owner, address: { city, state } } = shoppingCart;
console.log(`Owner: ${owner}, City: ${city}, State: ${state}`);

//  Object.keys, values, entries usage
console.log("Item Names:", Object.keys(shoppingCart.items));
console.log("Item Quantities:", Object.values(shoppingCart.items).map(i => i.quantity));
console.log("Item Details:", Object.entries(shoppingCart.items));
