// footer import
import { createFooter } from "../components/footer.js";

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);

chechUser();

function chechUser() {
  let userId = localStorage.getItem("userId") || null;
  let localAccessToken = localStorage.getItem("localAccessToken") || null;

  if (!userId && !localAccessToken) {
    window.location.href = "../pages/login.html";
  }
}
