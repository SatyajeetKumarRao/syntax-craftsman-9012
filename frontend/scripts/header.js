let login_signup_container = document.getElementById("login_signup_container");
let admin_panel_container = document.getElementById("admin_panel_container");
let user_profile_container = document.getElementById("user_profile_container");

chechUser();

async function chechUser() {
  try {
    let userId = localStorage.getItem("userId") || null;
    let localAccessToken = localStorage.getItem("localAccessToken") || null;

    if (userId) {
      login_signup_container.classList.add("disable");
      login_signup_container.classList.remove("active");

      let userDetails = await getUserDetails(userId);

      if (userDetails.role == "admin") {
        admin_panel_container.classList.add("active");
        admin_panel_container.classList.remove("disable");
      }

      user_profile_container.classList.add("active");
      user_profile_container.classList.remove("disable");
    } else {
      login_signup_container.classList.add("active");
      login_signup_container.classList.remove("disable");

      admin_panel_container.classList.add("disable");
      admin_panel_container.classList.remove("active");

      user_profile_container.classList.add("disable");
      user_profile_container.classList.remove("active");
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUserDetails(userId) {
  const userURL = "https://syntax-craftsman-9012.onrender.com/users";

  try {
    let response = await fetch(`${userURL}/${userId}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: some error occurred");
  }

  return null;
}

//search
let search_button = document.getElementById("search_button");
search_button.addEventListener("click", () => {
  let search_input = document.getElementById("search_input_box").value;
  localStorage.setItem("queryParam", `&title_like=${search_input}`);
  window.location.href = "../pages/products.html";
});

//logout script
let logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("localAccessToken");
  window.location.href = "../index.html";
});

// Update Cart Item Count
showCartItemCount();

function showCartItemCount() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let cart_item_count = document.getElementById("cart_item_count");

  cart_item_count.textContent = cartItems.length;
}

let exotic_fruits_veggies = document.querySelector("#exotic_fruits_veggies");
exotic_fruits_veggies.addEventListener("click", () => {
  localStorage.setItem(
    "queryParam",
    `&sub_category_like=Exotic%20Fruits%20&%20Veggies`
  );
  window.location.href = "../pages/products.html";
});
let tea = document.querySelector("#tea");
tea.addEventListener("click", () => {
  localStorage.setItem("queryParam", `&title_like=tea`);
  window.location.href = "../pages/products.html";
});
let ghee = document.querySelector("#ghee");
ghee.addEventListener("click", () => {
  localStorage.setItem("queryParam", `&title_like=ghee`);
  window.location.href = "../pages/products.html";
});
let nandini = document.querySelector("#nandini");
nandini.addEventListener("click", () => {
  localStorage.setItem("queryParam", `&title_like=nandini`);
  window.location.href = "../pages/products.html";
});
let fresh_vegetable = document.querySelector("#fresh_vegetable");
fresh_vegetable.addEventListener("click", () => {
  localStorage.setItem("queryParam", `&sub_category_like=Fresh%20Vegetables`);
  window.location.href = "../pages/products.html";
});
