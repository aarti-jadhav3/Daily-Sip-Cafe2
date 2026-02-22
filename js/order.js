

// let cart = [];
// let total = 0;

// const cartList = document.getElementById("cartList");
// const totalDisplay = document.getElementById("total");
// const orderMessage = document.getElementById("orderMessage");
// const orderHistory = document.getElementById("orderHistory");

// // Add item to cart
// function addItem(name, price) {
//   cart.push({ name, price });
//   total += price;

//   updateCart();
// }

// // Update cart UI
// function updateCart() {
//   cartList.innerHTML = "";
//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - ₹${item.price}`;
//     cartList.appendChild(li);
//   });

//   totalDisplay.textContent = total;
// }

// // Place Order
// document.getElementById("orderForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("orderName").value.trim();
//   const phone = document.getElementById("orderPhone").value.trim();

//   if (!name || !phone || cart.length === 0) {
//     orderMessage.style.color = "red";
//     orderMessage.textContent = "Please fill details and select items.";
//     return;
//   }

//   const order = { name, phone, items: cart, total };

//   let orders = JSON.parse(localStorage.getItem("orders")) || [];
//   orders.push(order);
//   localStorage.setItem("orders", JSON.stringify(orders));

//   orderMessage.style.color = "green";
//   orderMessage.textContent = "Order Placed Successfully!";

//   cart = [];
//   total = 0;
//   updateCart();
//   this.reset();
//   loadOrders();
// });

// // Load previous orders
// function loadOrders() {
//   orderHistory.innerHTML = "";

//   let orders = JSON.parse(localStorage.getItem("orders")) || [];

//   orders.forEach(order => {
//     const li = document.createElement("li");
//     li.textContent =
//       `${order.name} | ₹${order.total} | Items: ${order.items.map(i => i.name).join(", ")}`;
//     orderHistory.appendChild(li);
//   });
// }

// document.addEventListener("DOMContentLoaded", loadOrders);


let cart = [];

// Add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

// Render cart items and total
function renderCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const totalSpan = document.getElementById("total");

    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItemsDiv.appendChild(div);
    });

    totalSpan.innerText = total;
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Checkout form handling
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("orderMessage");

    if (cart.length === 0) {
        message.innerText = "Cart is empty!";
        message.style.color = "red";
        return;
    }

    message.innerText = "🎉 Order placed successfully!";
    message.style.color = "green";

    // Clear cart after order
    cart = [];
    renderCart();

    this.reset();
});