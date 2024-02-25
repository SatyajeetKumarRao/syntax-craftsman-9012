import { createFooter } from "../components/footer.js";

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

store_offer_create();
bank_offer_create();
top_offer_create();
snacks_store_create();
cleaning_household_create();
beauty_hygiene_create();
home_kitchen_essential_create();

Initialize_Swiper();

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

    let elementArray = createCardElement(store_offer_array, 'store offer');

    store_offer.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(bank_offer_array, 'bank_offer');

    bank_offer_img_container.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(top_offer_array, 'top_offer');

    top_offer_img_container.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(snacks_store_array, 'snacks');

    snacks_store_img_container.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(cleaning_household_array, 'cleaning_household');

    cleaning_household_img_container.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(beauty_hygiene_array, 'beauty_hygiene');

    beauty_hygiene_img_container.append(...elementArray);

    console.log(elementArray);
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

    let elementArray = createCardElement(home_kitchen_essential_array, 'home_kitchen_essential');

    home_kitchen_essential_img_container.append(...elementArray);

    console.log(elementArray);
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


function Initialize_Swiper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}