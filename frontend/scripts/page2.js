
import { createFooter } from '../components/footer.js'

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

let hide_button = document.getElementById('hide-filter');
hide_button.addEventListener('click', toggleSidebar);


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



//sidebar positioning
// function sidebarPosition() {
//   const sidebarPos = document.getElementById("sidebar");
//   const content = document.getElementById("content");
//   window.onscroll = () => {
//     let scrollTop = window.scrollY;
//     let viewportHeight = window.innerHeight;
//     let contentHeight = content.getBoundingClientRect().height;
//     let sidebarTop = sidebarPos.getBoundingClientRect().top + window.pageYOffset;

//     if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
//       content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
//       content.style.position = "fixed";
//     }
//     else {
//       content.style.transform = "";
//       content.style.position = "";
//     }
//   }
// }
