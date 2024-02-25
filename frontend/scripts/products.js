import { createFooter } from "../components/footer.js";

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

let hide_button = document.getElementById("hide-filter");
hide_button.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hide_filter_btn = document.querySelector(".hide-filter-btn");
  sidebar.classList.toggle("hidden-sidebar");

  // Change the text of filter button
  if (hide_filter_btn.innerText === "Hide Filters") {
    hide_filter_btn.innerText = "Show Filters";

    let content = document.getElementById("content");
    content.style.gridTemplateColumns = "repeat(4,1fr)";
  } else {
    hide_filter_btn.innerText = "Hide Filters";

    let content = document.getElementById("content");
    content.style.gridTemplateColumns = "repeat(3,1fr)";
  }
}

const productsURL = "https://syntax-craftsman-9012.onrender.com/product";

fetchLoadData();

async function fetchLoadData(pageNumber = 1, queryParamString = "") {
  try {
    let response = await fetch(
      `${productsURL}?_page=${pageNumber}&_limit=20${queryParamString}`
    );
    // console.log(response);

    let totalData = response.headers.get("x-total-count");
    console.log(totalData);

    // pagination(totalPage);

    let data = await response.json();
    // console.log(data);

    createRenderData(data);
  } catch (error) {
    console.log("Error : Some error Occurred");
  }
}

function createRenderData(dataArray) {
  let content = document.getElementById("content");

  dataArray.map(element => {
    let card = createProductCard(element);
    content.append(card);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createProductCard(element) {
  // Create main container div
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "card_container");
  cardContainer.style.maxWidth = "16rem";

  // Create card image container
  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card_image_container", "card");

  // Create discount div
  const discountDiv = document.createElement("div");
  discountDiv.classList.add("discount");

  // Create discount text
  const discountText = document.createElement("p");
  discountText.classList.add("card-text");
  discountText.textContent = `${element.discount}% OFF`;

  // Append discount text to discount div
  discountDiv.appendChild(discountText);

  // Create image element
  const image = document.createElement("img");
  image.classList.add("card-img-top", "item_image");
  image.src = element.image;
  image.alt = `${element.title}`;

  // Append discount div and image to card image container
  cardImageContainer.appendChild(discountDiv);
  cardImageContainer.appendChild(image);

  // Create brand title container
  const brandTitleContainer = document.createElement("div");
  brandTitleContainer.classList.add("brand_title_container", "card-body");

  // Create brand text
  const brandText = document.createElement("p");
  brandText.classList.add("card_brand", "card-text");
  brandText.textContent = element.brand;

  // Create product name
  const productName = document.createElement("h5");
  productName.classList.add("card_product_name", "card-title");
  productName.textContent = element.title;

  // Append brand text and product name to brand title container
  brandTitleContainer.appendChild(brandText);
  brandTitleContainer.appendChild(productName);

  // Create quantity container
  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("quantity_container", "card-body");

  // Create quantity text
  const quantityText = document.createElement("p");
  quantityText.classList.add("card_product_quantity", "card-text");
  quantityText.textContent = element.quantity;

  // Create quantity count container
  const quantityCountContainer = document.createElement("div");
  quantityCountContainer.classList.add("quantity_count_container");

  // Create label for quantity count input
  const quantityLabel = document.createElement("label");
  quantityLabel.setAttribute("for", "quantity_count");
  quantityLabel.textContent = "Qty";

  // Create quantity count input
  const quantityInput = document.createElement("input");
  quantityInput.classList.add("quantity_count");
  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("name", "quantity_count");
  quantityInput.setAttribute("min", "1");
  quantityInput.setAttribute("max", "5");
  quantityInput.setAttribute("value", "1");

  // Append label and input to quantity count container
  quantityCountContainer.appendChild(quantityLabel);
  quantityCountContainer.appendChild(quantityInput);

  // Append quantity text and quantity count container to quantity container
  quantityContainer.appendChild(quantityText);
  quantityContainer.appendChild(quantityCountContainer);

  // Create price container
  const priceContainer = document.createElement("div");
  priceContainer.classList.add("price_container", "card-body");

  // Create current price text
  const currentPrice = document.createElement("p");
  currentPrice.classList.add("current_price", "card-text");
  currentPrice.textContent = `₹${element.price}`;

  // Create original price text
  const originalPrice = document.createElement("p");
  originalPrice.classList.add("original_price", "card-text");
  originalPrice.textContent = `₹${element.original_price}`;

  // Append current price and original price to price container
  priceContainer.appendChild(currentPrice);
  priceContainer.appendChild(originalPrice);

  // Create buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons_container", "card-body");

  // Create wishlist button
  const wishlistButton = document.createElement("button");
  wishlistButton.classList.add("wishlist");
  wishlistButton.setAttribute("type", "button");

  // Create wishlist icon
  const wishlistIcon = document.createElement("i");
  wishlistIcon.classList.add("fa-regular", "fa-bookmark");
  wishlistIcon.style.color = "#000000";

  // Append wishlist icon to wishlist button
  wishlistButton.appendChild(wishlistIcon);

  wishlistButton.addEventListener("click", () => {
    addItemToWishlist(element);
  });

  // Create add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add_cart");
  addToCartButton.setAttribute("type", "button");
  addToCartButton.textContent = "Add ";

  // Create cart icon
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-shopping");

  // Append cart icon to add to cart button
  addToCartButton.appendChild(cartIcon);

  addToCartButton.addEventListener("click", () => {
    let itemCount = quantityInput.value;
    addItemToCart(element, itemCount);
  });

  // Append wishlist button and add to cart button to buttons container
  buttonsContainer.appendChild(wishlistButton);
  buttonsContainer.appendChild(addToCartButton);

  // Append all containers to main card container
  cardContainer.appendChild(cardImageContainer);
  cardContainer.appendChild(brandTitleContainer);
  cardContainer.appendChild(quantityContainer);
  cardContainer.appendChild(priceContainer);
  cardContainer.appendChild(buttonsContainer);

  return cardContainer;
}

function addItemToWishlist(element) {
  let wishlistItemArray =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];
  wishlistItemArray.push(element);
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItemArray));
}

function addItemToCart(element, itemCount) {
  let cartItemArray = JSON.parse(localStorage.getItem("cartItems")) || [];
  element = { ...element, itemCount: itemCount };
  cartItemArray.push(element);
  localStorage.setItem("cartItems", JSON.stringify(cartItemArray));
}
