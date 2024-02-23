
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hide_filter_btn = document.querySelector('.hide-filter-btn');
    sidebar.classList.toggle('hidden-sidebar');

    // Change the text of filter button
    if (hide_filter_btn.innerText === "Hide Filters") {
      hide_filter_btn.innerText = "Show Filters";
    } else {
      hide_filter_btn.innerText = "Hide Filters";
    }
  }

  //dropdown js
  function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    } else {
      dropdownContent.classList.add("show");
    }
  }
  
  function setRating(rating) {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.remove("show");
  }
  