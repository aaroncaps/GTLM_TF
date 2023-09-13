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
    const assignTo = getQueryParam("AssignedTo");

    // Populate the read-only input fields
    document.getElementById("taskNumber").value = taskNumber;
    document.getElementById("dateCreated").value = dateCreated;
    document.getElementById("task").value = task;
    document.getElementById("status").value = status;
    document.getElementById("details").value = details;
    document.getElementById("assignTo").textContent = assignTo;

    // Enable editing of the "Details" section (remove the readonly attribute)
    document.getElementById("enableEditButton").addEventListener("click", function () {
        document.getElementById("details").removeAttribute("readonly");
    });

});
// reviewtask.js



// JavaScript code for handling button clicks and popup

document.addEventListener("DOMContentLoaded", function () {
    
    const declineButton = document.getElementById("declineButton");

    
    declineButton.addEventListener("click", function() {
        
        const reason = prompt("Please provide a reason for declining the task:");

        
        if (reason !== null && reason !== "") {
            
            alert("Task declined with reason: " + reason);
        } else {
          
            alert("Task decline was canceled or no reason provided.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    const cancelButton = document.getElementById("cancelButton");

    
    cancelButton.addEventListener("click", function () {
        // Navigate back to the "tasks.html" page
        window.location.href = "tasks.html";
    });

   
});

document.addEventListener("DOMContentLoaded", function () {
    
    const completeTaskButton = document.getElementById("completeTaskButton");

    
    completeTaskButton.addEventListener("click", function () {
        
        const confirmation = confirm("Are you sure you want to complete this task?");

        
        if (confirmation) {
            // If the user confirms, redirect to "task.html"
            window.location.href = "tasks.html";
        } else {
            // If the user cancels, do nothing or provide feedback
            alert("Task completion was canceled.");
        }
    });
});

