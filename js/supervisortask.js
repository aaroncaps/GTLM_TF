

// Dummy data for the list of tasks

const tasks = [
    {
        taskNumber: "T1231",
        dateCreated: "03-Sep-2023",
        task: "Asset surveillance required",
        progress: "Review Task",
        assignedTo: "-",
        details: "Perform surveillance on assets in the main building."
    },
    {
        taskNumber: "T1232",
        dateCreated: "02-Sep-2023",
        task: "Surveillance at DKD12",
        progress: "Accepted/Created Task",
        assignedTo: "-",
        details: "Conduct surveillance at location DKD12."
    },
    {
        taskNumber: "T1233",
        dateCreated: "01-Sep-2023",
        task: "Surveillance at GGGG",
        progress: "Assigned & In Progress",
        assignedTo: "Alice Smith",
        details: "Ongoing surveillance at location GGGG by Alice Smith."
    },
    {
        taskNumber: "T1234",
        dateCreated: "31-Aug-2023",
        task: "Threat assessment needed at area XYZ",
        progress: "Review Task",
        assignedTo: "-",
        details: "Review and assess potential threats in area XYZ."
    },
    {
        taskNumber: "T1235",
        dateCreated: "30-Aug-2023",
        task: "Security check at location ABC",
        progress: "Accepted/Created Task",
        assignedTo: "",
        details: "Perform security checks at location ABC."
    },
    {
        taskNumber: "T1236",
        dateCreated: "29-Aug-2023",
        task: "Surveillance at LMN Park",
        progress: "Assigned & In Progress",
        assignedTo: "Bob Johnson",
        details: "Ongoing surveillance at LMN Park by Bob Johnson."
    },
    {
        taskNumber: "T1237",
        dateCreated: "28-Aug-2023",
        task: "Security audit for Company XYZ",
        progress: "Assigned & In Progress",
        assignedTo: "Charlie Brown",
        details: "Charlie Brown is conducting a security audit for Company XYZ."
    },
    {
        taskNumber: "T1238",
        dateCreated: "27-Aug-2023",
        task: "Patrol at Location PQR",
        progress: "Review Task",
        assignedTo: "-",
        details: "Patrol duty at location PQR is scheduled for review."
    },
    {
        taskNumber: "T1239",
        dateCreated: "26-Aug-2023",
        task: "Surveillance at ABC Building",
        progress: "Accepted/Created Task",
        assignedTo: "-",
        details: "Perform surveillance at ABC Building as per the task."
    },
    {
        taskNumber: "T1240",
        dateCreated: "25-Aug-2023",
        task: "Asset protection for Event DEF",
        progress: "Assigned & In Progress",
        assignedTo: "Eve Davis",
        details: "Eve Davis is responsible for asset protection at Event DEF."
    }
];


//Dummy data for the list of security officers
const securityOfficers = [
    "John Doe",
    "Alice Smith",
    "Bob Johnson",
    "Charlie Brown",
    "Eve Davis",
];

// Rest of  code... this is for fetching so from securityofficers and displaying in the page
document.addEventListener("DOMContentLoaded", function () {
    // Find the elements
    const assignToOutput = document.getElementById("assignToOutput");
    const assignToSearchButton = document.getElementById("assignToSearchButton");
    const assignToDropdown = document.getElementById("assignToDropdown");

    // Define dummy data for options 
    const securityOfficers = ["John Doe", "Alice Smith", "Bob Johnson", "Charlie Brown", "Eve Davis"];

    // Function to populate the dropdown with security officer data
    function populateDropdown() {
        assignToDropdown.innerHTML = ""; // Clear existing options

        // Iterate through the security officers array and create options
        securityOfficers.forEach(function (officer) {
            const option = document.createElement("a");
            option.href = "#"; // 
            option.textContent = officer;

            // Add a click event listener to set the selected value
            option.addEventListener("click", function (e) {
                e.preventDefault();
                assignToOutput.value = officer;
                assignToDropdown.style.display = "none";
            });

            assignToDropdown.appendChild(option);
        });

        // Show the dropdown
        assignToDropdown.style.display = "block";
    }

    // Add a click event listener to the Search button
    assignToSearchButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the document click event from immediately closing the dropdown
        populateDropdown();
    });

    // Click event listener to close the dropdown when clicking outside of it
    document.addEventListener("click", function (e) {
        if (!assignToDropdown.contains(e.target) && e.target !== assignToSearchButton) {
            assignToDropdown.style.display = "none";
        }
    });

    // Rest of your code...
});
// 

// ... 

document.addEventListener("DOMContentLoaded", function () {
    const assignTaskButton = document.getElementById("assignTaskButton");
    const assignToOutput = document.getElementById("assignToOutput");

    // Function to show the confirmation dialog
    function showConfirmationDialog(assigneeName) {
        const confirmation = confirm(`Assign the task to ${assigneeName}?`);

        if (confirmation) {
            // User clicked "OK" in the confirmation dialog, perform the assignment
            

            // For example, after performing the assignment, you can redirect to tasks.html
            window.location.href = "tasks.html";
        } else {
            // User clicked "Cancel" in the confirmation dialog, do nothing
        }
    }

    // Add a click event listener to the Assign Task button
    assignTaskButton.addEventListener("click", function () {
        const assigneeName = assignToOutput.value;
        if (assigneeName) {
            // Show the confirmation dialog with the assignee's name
            showConfirmationDialog(assigneeName);
        } else {
            alert("Please select an assignee before assigning the task.");
        }
    });
});





















//




// Function to create a table row for tasks
// ...

// Function to create a table row for tasks
// ...

// Function to create a table row for tasks
// Function to create a table row for tasks
function createTableRow(task) {
    const row = document.createElement("tr");
    const taskNumberCell = document.createElement("td");
    const dateCreatedCell = document.createElement("td");
    const taskCell = document.createElement("td");
    const progressCell = document.createElement("td");
    const assignedToCell = document.createElement("td");

    // Create a clickable link for the task number
    const taskNumberLink = document.createElement("a");
    const reviewTaskUrl = `ReviewTask.html?TaskNumber=${encodeURIComponent(task.taskNumber)}&DateCreated=${encodeURIComponent(task.dateCreated)}&Task=${encodeURIComponent(task.task)}&Status=${encodeURIComponent(task.progress)}&Details=${encodeURIComponent(task.details)}`;
    const acceptedTaskUrl = `Accepted.html?TaskNumber=${encodeURIComponent(task.taskNumber)}&DateCreated=${encodeURIComponent(task.dateCreated)}&Task=${encodeURIComponent(task.task)}&Status=${encodeURIComponent(task.progress)}&Details=${encodeURIComponent(task.details)}`;
    const assignedTaskUrl = `Assigned.html?TaskNumber=${encodeURIComponent(task.taskNumber)}&DateCreated=${encodeURIComponent(task.dateCreated)}&Task=${encodeURIComponent(task.task)}&Status=${encodeURIComponent(task.progress)}&Details=${encodeURIComponent(task.details)}&AssignedTo=${encodeURIComponent(task.assignedTo)}`;

    // Check if progress is "Assigned" or "In Progress"
    if (task.progress === "Assigned & In Progress") {
        taskNumberLink.href = assignedTaskUrl;
    } else if (task.progress === "Accepted/Created Task") {
        taskNumberLink.href = acceptedTaskUrl;
    } else {
        taskNumberLink.href = reviewTaskUrl;
    }

    taskNumberLink.textContent = task.taskNumber;
    taskNumberLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = taskNumberLink.href;
    });

    taskNumberCell.appendChild(taskNumberLink);
    dateCreatedCell.textContent = task.dateCreated;
    taskCell.textContent = task.task;
    progressCell.textContent = task.progress;
    assignedToCell.textContent = task.assignedTo;

    row.appendChild(taskNumberCell);
    row.appendChild(dateCreatedCell);
    row.appendChild(taskCell);
    row.appendChild(progressCell);
    row.appendChild(assignedToCell);

    return row;
}


// ...

// Function to get the URL based on task progress
function getTaskPageUrl(task) {
    // Define URL mapping based on task progress
    const urlMapping = {
        "Review Task": "ReviewTask.html", // Change this URL to your review task page
        "Accepted/Created Task": "Accepted.html", // Change this URL to your accepted task page
        "Assigned & In Progress": "Assigned.html.html", // Change this URL to your in-progress task page
    };

    // Get the corresponding URL for the task's progress
    return urlMapping[task.progress] || "#"; // Default to "#" if no match found
}

// ...


// ...


// Function to populate the table with tasks
function populateTaskTable() {
    const taskTableBody = document.getElementById("groupTableBody");
    taskTableBody.innerHTML = "";

    tasks.forEach(task => {
        const tableRow = createTableRow(task);
        taskTableBody.appendChild(tableRow);
    });
}

// Call the function to populate the table when the page loads
window.addEventListener("load", () => {
    populateTaskTable();
});
// ...

// ...

// Function to filter tasks based on progress
function filterTasksByProgress(progress) {
    const taskContainer = document.getElementById("taskContainer");
    const taskTableBody = document.getElementById("groupTableBody");
    taskTableBody.innerHTML = "";

    tasks.forEach(task => {
        if (progress === "all" || task.progress === progress) {
            const tableRow = createTableRow(task);
            taskTableBody.appendChild(tableRow);
        }
    });

    // Hide the task container if there are no matching tasks
    if (taskTableBody.children.length === 0) {
        taskContainer.style.display = "none";
    } else {
        taskContainer.style.display = "block";
    }
}

// Event listener for the progress dropdown menu
document.getElementById("progressFilter").addEventListener("change", function () {
    const selectedProgress = this.value;
    filterTasksByProgress(selectedProgress);
});

// Show all tasks by default
filterTasksByProgress("all");

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Get the task number from the URL
const taskNumber = getUrlParameter("taskNumber");

// Define a function to fetch task data based on the task number
function fetchTaskData(taskNumber) {
    
    const taskData = tasks.find(task => task.taskNumber === taskNumber);
    return taskData;
}

// Fetch task data based on the task number from the URL
const taskData = fetchTaskData(taskNumber);

// Populate the task details in the HTML
if (taskData) {
    document.getElementById("taskNumber").textContent = taskData.taskNumber;
    document.getElementById("dateCreated").textContent = taskData.dateCreated;
    document.getElementById("task").textContent = taskData.task;
    document.getElementById("status").textContent = taskData.progress;
    document.getElementById("details").textContent = taskData.details;
    document.getElementById("assignTo").textContent = taskData.assignedTo;
} else {
    // Handle the case where the task data is not found
    console.error("Task data not found.");
}


