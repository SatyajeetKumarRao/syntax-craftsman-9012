
chechUser();

async function chechUser() {
    try {
        let userId = localStorage.getItem("userId") || null;

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
    let container = document.querySelector('.container');
    container.innerHTML = "";

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


// Function to clear text inputs
function clearTextInputs() {
    const inputs = document.querySelectorAll(
        'input[type="text"], input[type="number"]'
    );
    inputs.forEach((input) => {
        input.value = ""; // Set input value to empty string
    });
}