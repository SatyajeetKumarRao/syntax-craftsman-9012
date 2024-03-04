// footer import
import { createFooter } from "../components/footer.js";

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

checkUser();
checkCartItems();

function checkUser() {
  let userId = localStorage.getItem("userId") || null;
  let localAccessToken = localStorage.getItem("localAccessToken") || null;

  if (!userId && !localAccessToken) {
    window.location.href = "../pages/login.html";
  }
}

function checkCartItems() {
  let cartItemArray = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItemArray.length == 0) {
    let emptyCart = document.getElementById("emptyCart");
    emptyCart.classList.add("enable");
    emptyCart.classList.remove("disable");

    let cartItems = document.getElementById("cartItems");
    cartItems.classList.add("disable");
    cartItems.classList.remove("enable");
  } else {
    let emptyCart = document.getElementById("emptyCart");
    emptyCart.classList.add("disable");
    emptyCart.classList.remove("enable");

    let cartItems = document.getElementById("cartItems");
    cartItems.classList.add("enable");
    cartItems.classList.remove("disable");

    ShowCartItems(cartItemArray);
  }
}

function ShowCartItems(cartItemArray) {
  let totalItemCount = document.getElementById("totalItemCount");
  let totalAmount = document.getElementById("totalAmount");
  let totalSavingAmount = document.getElementById("totalSavingAmount");
  let tableItemCount = document.getElementById("tableItemCount");
  let tableBody = document.getElementById("tableBody");

  if (cartItemArray.length == 1) {
    totalItemCount.textContent = "1 item";
  } else {
    totalItemCount.textContent = `${cartItemArray.length} items`;
  }

  let totalCartAmount = 0;

  cartItemArray.forEach((element) => {
    totalCartAmount += element.price;
  });

  totalAmount.textContent = totalCartAmount.toFixed(2);

  let totalCartOriginalAmount = 0;

  cartItemArray.forEach((element) => {
    totalCartOriginalAmount += element.original_price;
  });

  totalSavingAmount.textContent = (
    totalCartOriginalAmount - totalCartAmount
  ).toFixed(2);

  if (cartItemArray.length == 1) {
    tableItemCount.textContent = "1 item";
  } else {
    tableItemCount.textContent = `${cartItemArray.length} items`;
  }

  cartItemArray.forEach((element, index) => {
    let bodyRow = createTable(element, index);
    tableBody.appendChild(bodyRow);
  });
}

function clearTable() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
}

function createTable(cartItem, index) {
  var bodyRow = document.createElement("tr");

  var itemCell = document.createElement("td");

  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image_container");

  var img = document.createElement("img");
  img.src = cartItem.image;
  img.alt = cartItem.title;
  imageContainer.appendChild(img);

  var productNamePriceContainer = document.createElement("div");
  productNamePriceContainer.classList.add("productNamePrice_container");

  var productName = document.createElement("p");
  productName.classList.add("productName");
  productName.textContent = cartItem.title;
  productNamePriceContainer.appendChild(productName);

  var priceContainer = document.createElement("div");
  priceContainer.classList.add("price_container");

  var price = document.createElement("p");
  price.classList.add("price");
  price.textContent = cartItem.price;
  priceContainer.appendChild(price);

  var originalPrice = document.createElement("p");
  originalPrice.classList.add("original_price");
  originalPrice.textContent = cartItem.original_price;
  priceContainer.appendChild(originalPrice);

  productNamePriceContainer.appendChild(priceContainer);

  itemCell.appendChild(imageContainer);
  itemCell.appendChild(productNamePriceContainer);

  bodyRow.appendChild(itemCell);

  var quantityCell = document.createElement("td");

  var quantityContainer = document.createElement("div");
  quantityContainer.classList.add("quantity_container");

  var quantityInput = document.createElement("input");
  quantityInput.classList.add("quantity");
  quantityInput.type = "number";
  quantityInput.min = "0";
  quantityInput.max = "5";
  quantityInput.value = cartItem.itemCount;
  quantityContainer.appendChild(quantityInput);

  var deleteSaveContainer = document.createElement("div");
  deleteSaveContainer.classList.add("deleteSave_container");

  var deleteItem = document.createElement("p");
  deleteItem.classList.add("delete_item");
  deleteItem.textContent = "Delete";
  deleteItem.addEventListener("click", () => {
    let cartItemArray = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItemArray.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItemArray));
    clearTable();
    checkCartItems();
  });

  deleteSaveContainer.appendChild(deleteItem);

  var separator = document.createElement("p");
  separator.textContent = "|";
  deleteSaveContainer.appendChild(separator);

  var saveLater = document.createElement("p");
  saveLater.classList.add("save_later");
  saveLater.textContent = "Save for later";

  saveLater.addEventListener("click", () => {
    let cartItemArray = JSON.parse(localStorage.getItem("cartItems")) || [];

    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    let [cartItem] = cartItemArray.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItemArray));
    clearTable();
    checkCartItems();
    wishlistItems.unshift(cartItem);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  });

  deleteSaveContainer.appendChild(saveLater);

  quantityCell.appendChild(quantityContainer);
  quantityCell.appendChild(deleteSaveContainer);

  bodyRow.appendChild(quantityCell);

  var subtotalCell = document.createElement("td");

  var subtotalPrice = document.createElement("p");
  subtotalPrice.classList.add("price");
  subtotalPrice.textContent = (cartItem.price * cartItem.itemCount).toFixed(2);

  var savedAmount = document.createElement("p");
  savedAmount.classList.add("savedAmount");
  savedAmount.textContent = "Saved: ";

  var savedAmountSpan = document.createElement("span");
  savedAmountSpan.textContent = (
    (cartItem.original_price - cartItem.price) *
    cartItem.itemCount
  ).toFixed(2);
  savedAmount.appendChild(savedAmountSpan);

  subtotalCell.appendChild(subtotalPrice);
  subtotalCell.appendChild(savedAmount);

  bodyRow.appendChild(subtotalCell);

  return bodyRow;
}
