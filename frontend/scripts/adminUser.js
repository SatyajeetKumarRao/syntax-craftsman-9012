chechUser();

async function chechUser() {
  try {
    let userId = localStorage.getItem("userId") || null;
    let localAccessToken = localStorage.getItem("localAccessToken") || null;

    if (userId) {
      let userDetails = await getUserDetails(userId);

      if (userDetails.role === "admin") {
        //do nothing
      } else {
        clearAdminPanel();

        window.alert("You are Not Authorized");
        window.location.href = "../index.html";
      }
    } else {
      clearAdminPanel();
      window.alert("Not LoggedIn");
      window.location.href = "../pages/login.html";
    }
  } catch (error) {
    console.log(error);
  }
}

function clearAdminPanel() {
  let interface = document.getElementById("interface");
  interface.innerHTML = "";
  let menu = document.getElementById("menu");
  menu.innerHTML = "";
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

// Define the user URL
const userUrl = "https://syntax-craftsman-9012.onrender.com/users";

// variables for pagination
let currentPage = 1;
const limit = 10;
const buttonsPerPage = 10;
let searchTerm = "";

// createTableElements function
function createTableElements(data) {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  data.forEach(item => {
    let row = document.createElement("tr");
    row.style.backgroundColor = "white";

    let idCell = document.createElement("td");
    idCell.textContent = item.id;
    idCell.setAttribute("class", "ps-4");
    row.appendChild(idCell);

    let usernameCell = document.createElement("td");
    usernameCell.textContent = item.name; // Display username instead of brand
    row.appendChild(usernameCell);

    let emailCell = document.createElement("td");
    emailCell.textContent = item.email;
    row.appendChild(emailCell);

    let roleCell = document.createElement("td");
    roleCell.textContent = item.role;
    row.appendChild(roleCell);

    let actionsCell = document.createElement("td");
    
    // Edit button
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.style.margin = "5px";
    editButton.setAttribute("type", "button");
    editButton.classList.add("btn", "btn-dark");
    editButton.addEventListener("click", () => {
      // Open edit modal and populate fields with item data
      openEditModal(item);
    });
    actionsCell.appendChild(editButton);

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.margin = "5px";
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", () => {
      // Call function to handle delete operation
      handleDelete(item.id);
    });
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}


// Function to fetch data for a specific page and search term
async function fetchPageData(page, searchTerm = "") {
  let url;
  if (searchTerm.trim() !== "") {
    url = `${userUrl}?username_like=${searchTerm}&_page=${page}&_limit=${limit}`;
  } else {
    url = `${userUrl}?_page=${page}&_limit=${limit}`;
  }
  console.log("Fetching data from URL:", url);
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Function to fetch and display data for the current page
async function fetchDataAndDisplay(page, searchTerm = "") {
  const data = await fetchPageData(page, searchTerm);
  if (data.length === 0) {
    // If no data is returned, display a message
    document.getElementById("tableBody").innerHTML =
      "<tr><td colspan='5'>No matching data found.</td></tr>";
  } else {
    createTableElements(data);
  }
}

// Function to create pagination buttons
function createPaginationButtons(totalPages) {
  const paginationWrapper = document.querySelector(".pagination-wrapper");
  paginationWrapper.innerHTML = "";

  const startPage = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
  const endPage = Math.min(totalPages, startPage + buttonsPerPage - 1);

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", event => {
      currentPage = parseInt(event.target.innerText);
      fetchDataAndDisplay(currentPage, searchTerm);
    });
    paginationWrapper.appendChild(button);
  }

  // Add Previous button
  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.addEventListener("click", () => {
      currentPage--;
      fetchDataAndDisplay(currentPage, searchTerm);
    });
    paginationWrapper.insertBefore(prevButton, paginationWrapper.firstChild);
  }

  // Add Next button
  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", () => {
      currentPage++;
      fetchDataAndDisplay(currentPage, searchTerm);
    });
    paginationWrapper.appendChild(nextButton);
  }
}

// Function to calculate total pages and create pagination buttons
function calculateAndRenderPagination(totalDataCount) {
  const totalPages = Math.ceil(totalDataCount / limit);
  createPaginationButtons(totalPages);
}

// Add event listener to the search form
document.querySelector("form").addEventListener("submit", async event => {
  event.preventDefault();
  searchTerm = document.querySelector('input[type="search"]').value.trim();
  currentPage = 1; // Reset current page when performing a new search
  await fetchDataAndDisplay(currentPage, searchTerm);
});

// Fetch total data count and render pagination
async function fetchAndRenderPagination() {
  try {
    const data = await fetch(userUrl);
    const jsonData = await data.json();
    const totalDataCount = jsonData.length;
    calculateAndRenderPagination(totalDataCount);
    fetchDataAndDisplay(currentPage, searchTerm);
  } catch (error) {
    console.log(error);
  }
}

// Call the function to fetch and render pagination when the page loads
fetchAndRenderPagination();

// Function to open edit modal and populate fields with item data
function openEditModal(item) {
  const modal = document.getElementById("editModal");
  if (modal) {
    const modalTitle = modal.querySelector(".modal-title");
    const editId = modal.querySelector("#editId");
    const editUsername = modal.querySelector("#editUsername");
    const editEmail = modal.querySelector("#editEmail");
    const editRole = modal.querySelector("#editRole");

    modalTitle.textContent = `Edit User ID: ${item.id}`;
    editId.value = item.id;
    editUsername.value = item.username;
    editEmail.value = item.email;
    editRole.value = item.role;

    // Show the modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  } else {
    console.error("Edit modal not found in the DOM.");
  }
}

// Function to handle updating data on form submit
async function updateUser() {
  const id = document.getElementById("editId").value;
  const updatedData = {
    username: document.getElementById("editUsername").value,
    email: document.getElementById("editEmail").value,
    role: document.getElementById("editRole").value
  };

  try {
    const response = await fetch(`${userUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    // Refresh data after update
    fetchDataAndDisplay(currentPage, searchTerm);
    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("editModal")
    );
    modal.hide();
  } catch (error) {
    console.error("Error:", error);
  }
}
