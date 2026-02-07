let cartCount = 0;
let total = 0;

function addToCart(price) {
  cartCount++;
  total += price;

  localStorage.setItem("cartCount", cartCount);
  localStorage.setItem("total", total);

  document.getElementById("cartCount").innerText = cartCount;
}

window.onload = function() {
  if(localStorage.getItem("cartCount")) {
    cartCount = localStorage.getItem("cartCount");
    total = localStorage.getItem("total");

    if(document.getElementById("cartCount"))
      document.getElementById("cartCount").innerText = cartCount;

    if(document.getElementById("total"))
      document.getElementById("total").innerText = total;
  }
}
