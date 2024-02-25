
// footer import
import { createFooter } from '../components/footer.js'

// Generate footer element
const footer = createFooter();

// Append footer to the body of the document
document.body.appendChild(footer);


// Login SignUp Toggle Script
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


// backend server url
const signInURL = 'https://syntax-craftsman-9012.onrender.com/login';
const signUpURL = 'https://syntax-craftsman-9012.onrender.com/signup';


// login operation
let signin_button = document.getElementById("signin_button");

signin_button.addEventListener("click", () => {

    event.preventDefault();
    loginUser();
});

async function loginUser() {

    let login_email = document.getElementById('login_email');
    let login_password = document.getElementById('login_password');

    let email = login_email.value;
    let password = login_password.value;
    if (email && password) {

        let credential = {
            "email": email,
            "password": password
        }

        try {
            let response = await fetch(signInURL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(credential),
            });

            let data = await response.json();

            if (typeof data === 'object') {

                console.log(data);
                createToast('success');

                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('localAccessToken', data.accessToken);

                window.location.href = '../index.html';
            }
            else {
                createToast('error');
            }

        } catch (error) {
            createToast('error');
            console.log('Error : Some error occurred', error);
        }
    }

    else {
        createToast('error');
    }
}


// signup operation

let signup_button = document.getElementById('signup_button');

signup_button.addEventListener('click', () => {

    event.preventDefault();
    signupUser();

});


async function signupUser() {

    let signup_name = document.getElementById('signup_name');
    let signup_email = document.getElementById('signup_email');
    let signup_password = document.getElementById('signup_password');

    let name = signup_name.value;
    let email = signup_email.value;
    let password = signup_password.value;

    if (name && email && password) {

        let userDetails = {
            "name": name,
            "email": email,
            "password": password,
            "role": "user"
        }

        try {

            let response = await fetch(signUpURL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });

            let data = await response.json();

            if (typeof data === 'object') {

                createToast('success');
                window.location.href = '../index.html';
            }
            else {
                createToast('error');
            }

        } catch (error) {

            createToast('error');
            console.log('Error : Some error occurred', error);
        }

    }
    else {
        createToast('error');
    }

}







// Toast Notification Script
const notifications = document.querySelector(".notifications");

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}

const removeToast = (toast_message) => {
    toast_message.classList.add("hide");
    if (toast_message.timeoutId) clearTimeout(toast_message.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast_message.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast_message = document.createElement("li"); // Creating a new 'li' element for the toast
    toast_message.className = `toast_message ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast_message.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast_message); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast_message.timeoutId = setTimeout(() => removeToast(toast_message), toastDetails.timer);
}


