// ReviewTask.html JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Function to parse query parameters from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Retrieve query parameters
    const taskNumber = getQueryParam("TaskNumber");
    const dateCreated = getQueryParam("DateCreated");
    const task = getQueryParam("Task");
    const status = getQueryParam("Status");
    const details = getQueryParam("Details");

    // Populate the read-only input fields
    document.getElementById("taskNumber").value = taskNumber;
    document.getElementById("dateCreated").value = dateCreated;
    document.getElementById("task").value = task;
    document.getElementById("status").value = status;
    document.getElementById("details").value = details;

    // Enable editing of the "Details" section (remove the readonly attribute)
    document.getElementById("enableEditButton").addEventListener("click", function () {
        document.getElementById("details").removeAttribute("readonly");
    });

    // Handle form submission (if needed)
    const form = document.getElementById("reviewTaskForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from actually submitting
        const updatedDetails = document.getElementById("details").value;
        // Perform any actions with the updated details (e.g., send to the server)
        console.log("Updated Details:", updatedDetails);
        // After handling the submission, you can reapply the readonly attribute if needed.
        document.getElementById("details").setAttribute("readonly", "true");
    });
});
// reviewtask.js

// Add this code at the bottom of your existing reviewtask.js file

// JavaScript code for handling button clicks and popup
// Find the Decline button by its ID
document.addEventListener("DOMContentLoaded", function () {
    // Find the Decline button by its ID
    const declineButton = document.getElementById("declineButton");

    // Add a click event listener to the Decline button
    declineButton.addEventListener("click", function() {
        // Prompt the user for a reason and store it in a variable
        const reason = prompt("Please provide a reason for declining the task:");

        // Check if a reason was provided
        if (reason !== null && reason !== "") {
            // If a reason was provided, you can perform further actions here
            alert("Task declined with reason: " + reason);
        } else {
            // Handle the case where no reason was provided
            alert("Task decline was canceled or no reason provided.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Find the Cancel button by its ID
    const cancelButton = document.getElementById("cancelButton");

    // Add a click event listener to the Cancel button
    cancelButton.addEventListener("click", function () {
        // Navigate back to the "tasks.html" page
        window.location.href = "tasks.html";
    });

    // Rest of your code...
});
