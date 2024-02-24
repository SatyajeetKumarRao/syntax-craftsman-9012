// Define the product URL
const productUrl = "https://syntax-craftsman-9012.onrender.com/product";

// Define variables for pagination
let currentPage = 1;
const limit = 6; 
const buttonsPerPage = 10; 

// createTableElements function
function createTableElements(data) {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    data.forEach((item) => {
        let row = document.createElement("tr");
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

        tableBody.appendChild(row);
    });
}

// Function to fetch data for a specific page
async function fetchPageData(page) {
    const url = `${productUrl}?_page=${page}&_limit=${limit}`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Function to fetch and display data for the current page
async function fetchDataAndDisplay(page) {
    const data = await fetchPageData(page);
    createTableElements(data);
}

// Function to create pagination buttons
function createPaginationButtons(totalPages) {
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    paginationWrapper.innerHTML = '';

    const startPage = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
    const endPage = Math.min(totalPages, startPage + buttonsPerPage - 1);

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            currentPage = i; 
            fetchDataAndDisplay(currentPage);
            createPaginationButtons(totalPages); 
        });
        paginationWrapper.appendChild(button);
    }

    // Add Previous button
    if (startPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.addEventListener('click', () => {
            currentPage = Math.max(1, currentPage - buttonsPerPage);
            fetchDataAndDisplay(currentPage);
            createPaginationButtons(totalPages);
        });
        paginationWrapper.insertBefore(prevButton, paginationWrapper.firstChild);
    }

    // Add Next button
    if (endPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', () => {
            currentPage = Math.min(totalPages, currentPage + buttonsPerPage);
            fetchDataAndDisplay(currentPage);
            createPaginationButtons(totalPages);
        });
        paginationWrapper.appendChild(nextButton);
    }
}

// Function to calculate total pages and create pagination buttons
function calculateAndRenderPagination(totalDataCount) {
    const totalPages = Math.ceil(totalDataCount / limit);
    createPaginationButtons(totalPages);
}

// Fetch total data count and render pagination
async function fetchAndRenderPagination() {
    try {
        const data = await fetch(productUrl);
        const jsonData = await data.json();
        const totalDataCount = jsonData.length; 
        // console.log("Total data count:", totalDataCount);

        calculateAndRenderPagination(totalDataCount);

        // Fetch and display data for the first page
        fetchDataAndDisplay(currentPage);
    } catch (error) {
        console.log(error);
    }
}

// Call the function to fetch and render pagination when the page loads
fetchAndRenderPagination();
