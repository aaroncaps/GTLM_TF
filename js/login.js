let screenHeight = screen.height;
function login(e) {
    e.preventDefault();
    const userId = document.getElementById("user-id");
    const password = document.getElementById("password");
    

    //Dummy condition to redirect to the different roles
    if(password != null && password.value != '') {
        if(password.value == 'admin') {
            window.location.href = '../administrator/tasks.html';
        } else if(password.value == 'dis') {
            window.location.href = '../dispatcher/tasks.html';
        } else if(password.value == 'super') {
            window.location.href = '../supervisor/tasks.html';
        } else if(password.value == 'so') {
            window.location.href = '../security_officer/tasks.html';
        }
    }
}