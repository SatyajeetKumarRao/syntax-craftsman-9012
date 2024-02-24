let login_signup_container = document.getElementById('login_signup_container');
let admin_panel_container = document.getElementById('admin_panel_container');
let user_profile_container = document.getElementById('user_profile_container');


chechUser();

async function chechUser() {

    try {
        let userId = localStorage.getItem('userId') || null;
        let localAccessToken = localStorage.getItem('localAccessToken') || null;

        if (userId) {
            login_signup_container.classList.add('disable');
            login_signup_container.classList.remove('active');

            let userDetails = await getUserDetails(userId);

            if (userDetails.role == 'admin') {
                admin_panel_container.classList.add('active');
                admin_panel_container.classList.remove('disable');
            }

            user_profile_container.classList.add('active');
            user_profile_container.classList.remove('disable');
        }
        else {
            login_signup_container.classList.add('active');
            login_signup_container.classList.remove('disable');

            admin_panel_container.classList.add('disable');
            admin_panel_container.classList.remove('active');

            user_profile_container.classList.add('disable');
            user_profile_container.classList.remove('active');
        }
    } catch (error) {
        console.log(error);
    }
}


async function getUserDetails(userId) {

    const userURL = 'http://localhost:4000/users';

    try {
        let response = await fetch(`${userURL}/${userId}`);
        let data = await response.json();
        return data;

    } catch (error) {
        console.log('Error: some error occurred');
    }

    return null;
}


//logout script
let logout = document.getElementById('logout');
logout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('localAccessToken');
    window.location.href = '../index.html';

});