document.addEventListener("DOMContentLoaded", function () {

  // Example data for list view
  const allTasks = [
    { number: "#123", date: "09-09-2023", name: "John", status: "Onboarding" },
    {
      number: "#134",
      date: "10-09-2023",
      name: "Freddy",
      status: "Onboarding",
    },
    {
      number: "#154",
      date: "11-09-2023",
      name: "Jackey",
      status: "Onboarding",
    },
    { number: "#190", date: "10-09-2023", name: "Terry", status: "Onboarding" },
    {
      number: "#213",
      date: "07-09-2023",
      name: "Paul",
      status: "Assigned & In Progress",
    },
    {
      number: "#222",
      date: "08-09-2023",
      name: "Kevin",
      status: "Assigned & In Progress",
    },
    { number: "#333", date: "09-09-2023", name: "Mark", status: "Completed" },
    { number: "#153", date: "08-09-2023", name: "Robert", status: "Completed" },
  ];

  let displayedTasks = [...allTasks]; // Copy of all tasks initially

  // Function to populate the list view
  function populateListView(filterStatus) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing data

    displayedTasks.forEach((task) => {
      if (filterStatus === "all" || task.status === filterStatus) {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td><a href="ongoingtasks.html#${task.number}" class="task-link">${task.number}</a></td>
                        <td>${task.date}</td>
                        <td>${task.name}</td>
                        <td>${task.status}</td>
                    `;
        taskList.appendChild(row);
      }
    });

    // Add click event listeners to task links
    const taskLinks = document.querySelectorAll(".task-link");
    taskLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
const task = displayedTasks[index];
    if (task.status === "Onboarding") {
      // Redirect to task_details.html with task data as URL parameters
      window.location.href = `task_details.html?number=${task.number}&date=${task.date}&name=${task.name}&status=${task.status}`;
    }

       // openTaskDetails(index);
      });
    });
  }

  // Function to populate the Kanban view
  function populateKanbanView(filterStatus) {
    const kanbanView = document.getElementById("kanbanView");
    const statusColumns = kanbanView.querySelectorAll(".kanban-column");

    // Clear existing data
    statusColumns.forEach((column) => {
      column.innerHTML = `<h2>${column.getAttribute("data-status")}</h2>`;
    });

    displayedTasks.forEach((task) => {
      if (filterStatus === "all" || task.status === filterStatus) {
        const card = document.createElement("div");
        card.classList.add("task-card");
        card.innerText = `${task.number}\n${task.date}\nName: ${task.name}`;

        // Append the task card to the appropriate status column
        statusColumns.forEach((column) => {
          if (column.getAttribute("data-status") === task.status) {
            column.appendChild(card);
          }
        });
      }
    });

    // Add click event listeners to task cards
    const taskCards = document.querySelectorAll(".task-card");
    taskCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        openTaskDetails(index);
      });
    });
  }


  // Hide the Kanban button initially
document.getElementById("kanbanViewButton").style.display = "none";

// Function to handle the initial view
function setInitialView() {
    const listViewButton = document.getElementById("listViewButton");
    const kanbanViewButton = document.getElementById("kanbanViewButton");
    
    listViewButton.classList.add("active");
    kanbanViewButton.classList.remove("active");

    document.getElementById("listView").style.display = "block";
    document.getElementById("kanbanView").style.display = "none";

    const statusFilter = document.getElementById("statusFilter").value;
    populateListView(statusFilter);

    // Hide the Kanban button
    kanbanViewButton.style.display = "inline-block";
    listViewButton.style.display = "none";
}

// Trigger the initial view setting
setInitialView();

// Event listener for the "List" view button
const listViewButton = document.getElementById("listViewButton");
listViewButton.addEventListener("click", () => {
    document.getElementById("listView").style.display = "block";
    document.getElementById("kanbanView").style.display = "none";
    listViewButton.classList.add("active");
    kanbanViewButton.classList.remove("active");

    const statusFilter = document.getElementById("statusFilter").value;
    populateListView(statusFilter);

    // Hide the Kanban button
    kanbanViewButton.style.display = "inline-block";
    listViewButton.style.display = "none";
});

// Event listener for the "Kanban" view button
const kanbanViewButton = document.getElementById("kanbanViewButton");
kanbanViewButton.addEventListener("click", () => {
    document.getElementById("listView").style.display = "none";
    document.getElementById("kanbanView").style.display = "block";
    kanbanViewButton.classList.add("active");
    listViewButton.classList.remove("active");

    const statusFilter = document.getElementById("statusFilter").value;
    populateKanbanView(statusFilter);

    // Hide the List button
    listViewButton.style.display = "inline-block";
    kanbanViewButton.style.display = "none";
});


// Initial population of the list view
populateListView("all");


  // Event listener for status filter dropdown
document
.getElementById("statusFilter")
.addEventListener("change", (event) => {
    const selectedStatus = event.target.value;
    if (listViewButton.classList.contains("active")) {
        populateListView(selectedStatus);
    } else {
        populateKanbanView(selectedStatus);
    }
});

// Initial population of the list view
populateListView("all");

;

 // Event listener for task links
const taskLinks = document.querySelectorAll(".task-link");
taskLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const task = displayedTasks[index];
    if (task.status === "Onboarding") {
      // Store task data in localStorage
      localStorage.setItem("taskNumber", task.number);
      localStorage.setItem("taskDate", task.date);
      localStorage.setItem("taskName", task.name);
      localStorage.setItem("taskStatus", task.status);

      // Redirect to task_details.html
      window.location.href = "task_details.html";
    }
  });
});

});



document.addEventListener("DOMContentLoaded", function () {
  // Retrieve task data from localStorage
  const taskNumber = localStorage.getItem("taskNumber");
  const taskDate = localStorage.getItem("taskDate");
  const taskName = localStorage.getItem("taskName");
  const taskStatus = localStorage.getItem("taskStatus");

  // Check if task data exists
  if (taskNumber && taskDate && taskName && taskStatus) {
      // Populate task details
      document.getElementById("taskNumber").textContent = taskNumber;
      document.getElementById("taskDate").textContent = taskDate;
      document.getElementById("taskName").textContent = taskName;
      document.getElementById("taskStatus").textContent = taskStatus;
  } else {
      // Handle the case when task data is not found
      alert("Task data not found.");
  }


// Add event listeners for buttons (you can add functionality as needed)
document.getElementById("cancelButton").addEventListener("click", () => {
// Handle cancel button click
window.history.back();
});

document.getElementById("submitButton").addEventListener("click", () => {
// Handle submit button click
 const confirmationMessage = `Confirm Send to "${taskName}"`;

alert(confirmationMessage);
});
});


/*
Admin
 event_logs script 
*/
document.addEventListener("DOMContentLoaded", function () {
  const eventLogData = [
    {
      date: "12/09/2023",
      time: "10:00 AM",
      action: "Report Created",
      user: "Julian",
      role: "Security Officer",
    },

    {
      date: "03/09/2023",
      time: "10:00 AM",
      action: "Task declined",
      user: "John",
      role: "Supervisor",
    },
    {
      date: "10/03/2023",
      time: "11:30 AM",
      action: "Task declined",
      user: "Alice",
      role: "Security Officer",
    },

    {
      date: "10/09/2023",
      time: "11:30 AM",
      action: "Removed SO from group XXX",
      user: "Scott",
      role: "Supervisor",
    },

    {
      date: "08/05/2023",
      time: "11:30 AM",
      action: "Task completed",
      user: "Alice",
      role: "Security Officer",
    },

    {
      date: "04/03/2023",
      time: "11:30 AM",
      action: "Task completed",
      user: "Freddy",
      role: "Supervisor",
    },
    // Add more data here...
  ];

  // Function to populate the table with event log data
  function populateEventLogTable(data) {
    const eventLogTable = document.getElementById("eventLogData");

    // Clear existing table rows
    eventLogTable.innerHTML = "";

    // Sort the data by date in ascending order
    data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });

    // Loop through the event log data and create table rows
    data.forEach((event) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td>${event.date}</td>
                    <td>${event.time}</td>
                    <td>${event.action}</td>
                    <td>${event.user}</td>
                    <td>${event.role}</td>
                `;
      eventLogTable.appendChild(row);
    });
  }

  // Function to filter and populate the table based on the date range
  function filterAndPopulateTable() {
    const dateFromInput = document.getElementById("dateFrom");
    const dateToInput = document.getElementById("dateTo");

    // Get selected date range
    const dateFromParts = dateFromInput.value.split("-");
    const dateToParts = dateToInput.value.split("-");

    // Create Date objects from the parts (year, month, day)
    const dateFrom = new Date(
      dateFromParts[0],
      dateFromParts[1] - 1,
      dateFromParts[2]
    );
    const dateTo = new Date(dateToParts[0], dateToParts[1] - 1, dateToParts[2]);

    // Filter event logs based on the date range
    const filteredData = eventLogData.filter((event) => {
      const eventParts = event.date.split("/");
      const eventDate = new Date(
        eventParts[2],
        eventParts[1] - 1,
        eventParts[0]
      );
      return eventDate >= dateFrom && eventDate <= dateTo;
    });

    // Populate the table with filtered data
    populateEventLogTable(filteredData);
  }

  // Call the function to populate the table when the page loads
  window.addEventListener("load", () => {
    populateEventLogTable(eventLogData);
  });

  // Add an event listener to the "Search" button
  const searchButton = document.getElementById("searchButton");
  if (searchButton) {
    searchButton.addEventListener("click", filterAndPopulateTable);
  }

  // Function to generate a CSV string from the table data
  function generateCSV() {
    const rows = document.querySelectorAll(".event-log-table tbody tr");
    const headers = ["Date", "Time", "Action", "User", "Role"];
    const csvRows = [headers.join(",")];

    rows.forEach((row) => {
      const cols = Array.from(row.children).map((col) => col.textContent);
      csvRows.push(cols.join(","));
    });

    return csvRows.join("\n");
  }

  // ...

  // Function to trigger the download of the CSV file with confirmation
  function downloadCSVWithConfirmation() {
    const csvData = generateCSV();

    // Ask the user for confirmation
    const confirmation = window.confirm("Do you want to download the file?");

    if (confirmation) {
      const blob = new Blob([csvData], { type: "text/csv" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "event_logs.csv";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }

  // Add an event listener to the "Save" button with confirmation
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", downloadCSVWithConfirmation);
});


/*
Admin
system logs */

document.addEventListener('DOMContentLoaded', function () {
  let isEditMode = false;
  const loginDetailsElement = document.getElementById('loginDetails');
  const helpSupportElement = document.getElementById('helpSupport');
  const updateButton = document.getElementById('updateButton');
  let initialLoginDetails = `This is the login screen details. Click 'UPDATE' to edit. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet, quaerat provident sit velit voluptas temporibus repellendus rerum expedita molestias porro, et dicta quasi vel fugiat totam! Magnam, delectus veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet, quaerat provident sit velit voluptas temporibus repellendus rerum expedita molestias porro, et dicta quasi vel fugiat totam! Magnam, delectus veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet, quaerat provident sit velit voluptas temporibus repellendus rerum expedita molestias porro, et dicta quasi vel fugiat totam! Magnam, delectus veniam.  `;
  let initialHelpSupport = `This is the help and support information. Click 'UPDATE' to edit.<br> Please Contact us via<br> - Phone +61 3333333<br> - Email: taskforcesecurity@gold.com.au `;

  loginDetailsElement.innerHTML = initialLoginDetails;
  helpSupportElement.innerHTML = initialHelpSupport;

  function toggleEditMode() {
      isEditMode = !isEditMode;
      if (isEditMode) {
          updateButton.textContent = 'SAVE';
          loginDetailsElement.contentEditable = true;
          helpSupportElement.contentEditable = true;
      } else {
          updateButton.textContent = 'UPDATE';
          loginDetailsElement.contentEditable = false;
          helpSupportElement.contentEditable = false;
      }
  }

  updateButton.addEventListener('click', function () {
      if (isEditMode) {
          const confirmSave = confirm('Do you want to save changes?');
          if (confirmSave) {
              initialLoginDetails = loginDetailsElement.innerHTML;
              initialHelpSupport = helpSupportElement.innerHTML;
              toggleEditMode();
          }
      } else {
          toggleEditMode();
      }
  });
});
