// Define the product URL
const productUrl = "https://syntax-craftsman-9012.onrender.com/product";

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

    let brandCell = document.createElement("td");
    brandCell.textContent = item.brand;
    row.appendChild(brandCell);

    let titleCell = document.createElement("td");
    titleCell.textContent = item.title;
    row.appendChild(titleCell);

    let quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = item.price;
    row.appendChild(priceCell);

    let original_priceCell = document.createElement("td");
    original_priceCell.textContent = item.original_price;
    row.appendChild(original_priceCell);

    let main_categoryCell = document.createElement("td");
    main_categoryCell.textContent = item.main_category;
    row.appendChild(main_categoryCell);

    let editCell = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.style.margin = "5px";
    editButton.setAttribute("type", "button");
    editButton.classList.add("btn", "btn-dark");
    editButton.addEventListener("click", () => {
      // Open edit modal and populate fields with item data
      openEditModal(item);
    });
    editCell.appendChild(editButton);
    row.appendChild(editCell);

    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.margin = "5px";
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", () => {
      // Call function to handle delete operation
      handleDelete(item.id);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

// Function to fetch data for a specific page and search term
async function fetchPageData(page, searchTerm = "") {
  let url;
  if (searchTerm.trim() !== "") {
    url = `${productUrl}?title_like=${searchTerm}&_page=${page}&_limit=${limit}`;
  } else {
    url = `${productUrl}?_page=${page}&_limit=${limit}`;
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
      "<tr><td colspan='6'>No matching data found.</td></tr>";
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
    const data = await fetch(productUrl);
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
    const editBrand = modal.querySelector("#editBrand");
    const editTitle = modal.querySelector("#editTitle");
    const editQuantity = modal.querySelector("#editQuantity");
    const editPrice = modal.querySelector("#editPrice");
    const editorignalPrice = modal.querySelector("#editorignalPrice");
    const editmainCategory = modal.querySelector("#editmainCategory");

    modalTitle.textContent = `Edit Product ID: ${item.id}`;
    editId.value = item.id;
    editBrand.value = item.brand;
    editTitle.value = item.title;
    editQuantity.value = item.quantity;
    editPrice.value = item.price;
    editorignalPrice.value = item.original_price;
    editmainCategory.value = item.main_category;

    // Show the modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  } else {
    console.error("Edit modal not found in the DOM.");
  }
}

// Function to handle updating data on form submit
document.getElementById("editForm").addEventListener("submit", async event => {
  event.preventDefault();
  const id = document.getElementById("editId").value;
  const updatedData = {
    brand: document.getElementById("editBrand").value,
    title: document.getElementById("editTitle").value,
    quantity: document.getElementById("editQuantity").value,
    price: document.getElementById("editPrice").value,
    original_price: document.getElementById("editorignalPrice").value,
    main_category: document.getElementById("editmainCategory").value
    // Add more fields as needed
  };

  try {
    const response = await fetch(`${productUrl}/${id}`, {
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
});

// Function to handle delete operation
async function handleDelete(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    try {
      const response = await fetch(`${productUrl}/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      // Refresh data after delete
      fetchDataAndDisplay(currentPage, searchTerm);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
