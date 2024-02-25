import { createFooter } from "../components/footer.js";

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

const productsURL = 'https://syntax-craftsman-9012.onrender.com/product';

store_offer_create();
bank_offer_create();
top_offer_create();
snacks_store_create();
cleaning_household_create();
beauty_hygiene_create();
home_kitchen_essential_create();

Initialize_Bottom_Banner_Swiper();
Initialize_My_Smart_basket_Swiper();
Initialize_Best_Seller_Swiper();

my_smart_basket_create();
best_seller_cards_create();


function store_offer_create() {
    let store_offer_array = [
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-1920,q=80",
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80",
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-1920,q=80",
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-1920,q=80",
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-1920,q=80",
        "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-1920,q=80"
    ];

    store_offer_array = store_offer_array.slice(0, 6);

    let store_offer = document.getElementById("store_offer");

    let elementArray = createCardElement(store_offer_array, "store offer");

    store_offer.append(...elementArray);
}

function bank_offer_create() {
    let bank_offer_array = [
        "https://i.ibb.co/N2SjFmB/bank1.webp",
        "https://i.ibb.co/TWCFrQs/bank2.webp",
        "https://i.ibb.co/2yfN9ST/bank3.webp",
        "https://i.ibb.co/J77X4yg/bank4.webp"
    ];

    let bank_offer_img_container = document.getElementById(
        "bank_offer_img_container"
    );

    let elementArray = createCardElement(bank_offer_array, "bank_offer");

    bank_offer_img_container.append(...elementArray);
}

function top_offer_create() {
    let top_offer_array = [
        "https://i.ibb.co/2tn3g4w/top1.webp",
        "https://i.ibb.co/zQwpnmn/top2.webp",
        "https://i.ibb.co/r0jy3nc/top3.webp",
        "https://i.ibb.co/cwSShj8/top4.webp"
    ];

    let top_offer_img_container = document.getElementById(
        "top_offer_img_container"
    );

    let elementArray = createCardElement(top_offer_array, "top_offer");

    top_offer_img_container.append(...elementArray);
}

function snacks_store_create() {
    let snacks_store_array = [
        "https://i.ibb.co/Tkz8GZM/snacks2.webp",
        "https://i.ibb.co/9nqgQ3N/snacks4.webp",
        "https://i.ibb.co/QHMnBVH/snacks1.webp",
        "https://i.ibb.co/yQmcQqX/snacks4.webp"
    ];

    let snacks_store_img_container = document.getElementById(
        "snacks_store_img_container"
    );

    let elementArray = createCardElement(snacks_store_array, "snacks");

    snacks_store_img_container.append(...elementArray);
}

function cleaning_household_create() {
    let cleaning_household_array = [
        "https://i.ibb.co/QJXhGvn/snacks3.webp",
        "https://i.ibb.co/zs8SGzq/snacks2.webp",
        "https://i.ibb.co/ZfCLhkH/snacks1.webp",
        "https://i.ibb.co/xMYVdw9/cleaning2.webp"
    ];

    let cleaning_household_img_container = document.getElementById(
        "cleaning_household_img_container"
    );

    let elementArray = createCardElement(
        cleaning_household_array,
        "cleaning_household"
    );

    cleaning_household_img_container.append(...elementArray);
}

function beauty_hygiene_create() {
    let beauty_hygiene_array = [
        "https://i.ibb.co/kqfxQ2h/beauty-hygine1.webp",
        "https://i.ibb.co/vBNXmj1/beauty-hygine4.webp",
        "https://i.ibb.co/stTSqHX/beauty-hygine3.webp",
        "https://i.ibb.co/T2NpJ1Z/beauty-hygine5.webp",
        "https://i.ibb.co/P16hSMM/beauty-hygine6.webp",
        "https://i.ibb.co/PwcrTL8/beauty-hygine2.webp"
    ];

    let beauty_hygiene_img_container = document.getElementById(
        "beauty_hygiene_img_container"
    );

    let elementArray = createCardElement(beauty_hygiene_array, "beauty_hygiene");

    beauty_hygiene_img_container.append(...elementArray);
}

function home_kitchen_essential_create() {
    let home_kitchen_essential_array = [
        "https://i.ibb.co/JQZ6ncL/home-kitchen1.webp",
        "https://i.ibb.co/DWGnBVy/home-kitchen2.webp",
        "https://i.ibb.co/BVf5wJ2/home-kitchen5.webp",
        "https://i.ibb.co/6sRJwmd/home-kitchen4.webp",
        "https://i.ibb.co/B2Xpgdd/home-kitchen3.webp",
        "https://i.ibb.co/9sDg5D3/home-kitchen6.webp"
    ];

    let home_kitchen_essential_img_container = document.getElementById(
        "home_kitchen_essential_img_container"
    );

    let elementArray = createCardElement(
        home_kitchen_essential_array,
        "home_kitchen_essential"
    );

    home_kitchen_essential_img_container.append(...elementArray);
}

function createCardElement(dataArray, altText) {
    let elementArray = dataArray.map((item, index) => {
        let a = document.createElement("a");
        a.href = "#";

        let img = document.createElement("img");
        img.src = item;
        img.alt = `${altText}_${index + 1}`;
        img.loading = "lazy";

        a.append(img);

        return a;
    });

    return elementArray;
}

function Initialize_My_Smart_basket_Swiper() {
    var swiper = new Swiper(".my_smart_basket_Swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}

function Initialize_Best_Seller_Swiper() {
    var swiper = new Swiper(".best_seller_Swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}

function Initialize_Bottom_Banner_Swiper() {
    var swiper = new Swiper(".bottom_banner_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}

async function my_smart_basket_create() {

    let basket_cards = document.getElementById('basket_cards');

    try {
        let response = await fetch(`${productsURL}?category_like=veggies`);
        let data = await response.json();

        let dataArray = shuffleArray(data);
        let newDataArray1 = dataArray.slice(0, 4);
        let newDataArray2 = dataArray.slice(4, 8);

        basket_cards.append(createRenderData(newDataArray1));
        basket_cards.append(createRenderData(newDataArray2));

    } catch (error) {
        console.log('Error: Some error occurred', error);
    }
}

async function best_seller_cards_create() {

    let best_seller_cards = document.getElementById('best_seller_cards');

    try {
        let response = await fetch(`${productsURL}?category_like=fruits`);
        let data = await response.json();

        let dataArray = shuffleArray(data);
        let newDataArray1 = dataArray.slice(0, 4);
        let newDataArray2 = dataArray.slice(4, 8);

        best_seller_cards.append(createRenderData(newDataArray1));
        best_seller_cards.append(createRenderData(newDataArray2));

    } catch (error) {
        console.log('Error: Some error occurred', error);
    }
}


function createRenderData(dataArray) {

    let swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    dataArray.map(element => {

        let card = createProductCard(element);
        swiperSlide.append(card);

    })

    return swiperSlide;
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

    wishlistButton.addEventListener('click', () => {
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

    addToCartButton.addEventListener('click', () => {
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

    let wishlistItemArray = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    wishlistItemArray.push(element);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItemArray));
}


function addItemToCart(element, itemCount) {

    let cartItemArray = JSON.parse(localStorage.getItem('cartItems')) || [];
    element = { ...element, itemCount: itemCount };
    cartItemArray.push(element);
    localStorage.setItem('cartItems', JSON.stringify(cartItemArray));
}