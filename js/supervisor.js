//function called by groups.html and redirects to groups_update.html
function redirectToGroupsUpdatePage(groupId, groupName) {
    const baseUrl = 'groups_update.html'; 
    const queryParams = `?groupId=${encodeURIComponent(groupId)}&groupName=${encodeURIComponent(groupName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

//function called by groups.html and redirects to reports_create.html
function redirectToReportsCreatePage(taskId, taskName) {
    const baseUrl = 'reports_create.html'; 
    const queryParams = `?taskId=${encodeURIComponent(taskId)}&taskName=${encodeURIComponent(taskName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}


//function that selects/deselects all checkbox in a table
function selectAllCheckboxes(tableId) {
    const selectAllCheckbox = document.getElementById(`selectAll${tableId.charAt(tableId.length - 1)}`);
    const checkboxes = document.querySelectorAll(`#${tableId} tbody input[type="checkbox"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

//function to confirm group creation 
function confirmCreateGroup(tableId) {
    const groupName = document.getElementById('group-name');
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');

    if (groupName.value !== '' && dateFrom.value !== '' && dateTo.value !== '') {
        const confirmation = window.confirm("Confirm create group " + groupName.value + " for the below Security Officers?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }
    }
}

//function to confirm group updates
function confirmUpdateGroup(tableId) {
    const groupName = document.getElementById('group-name');

    if (groupName.value !== '') {
        const confirmation = window.confirm("Confirm add Security Officer below to " + groupName.value + " group?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }
    }
}

//function to confirm group deletion
function confirmDeleteGroup(tableId) {
    const groupName = document.getElementById('group-name');

    if (groupName.value !== '') {
        const confirmation = window.confirm("Confirm delete  " + groupName.value + " group?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }
    }
}

//funtion to confirm removal of SO from the group
function confirmDeleteSO(tableId) {
    const groupName = document.getElementById('group-name');

    if (groupName.value !== '') {
        const confirmation = window.confirm("Confirm delete Security Officer from  " + groupName.value + " group?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }
    }
}

//function to select all those rows that were checked
function getCheckedRowsData(tableId) {
    const checkedRowsData = [];
    const checkboxes = document.querySelectorAll(`#${tableId} tbody input[type="checkbox"]`);

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            const userId = row.cells[1].textContent;
            const name = row.cells[2].textContent;
            checkedRowsData.push({ userId, name });
        }
    });
    const message = checkedRowsData.map(data => `   ${data.userId} ${data.name}`).join('\n');
    return message;
}

//cancel button that redirect to groups.html
function cancelButton() {
    window.location.href = 'groups.html';
}

//funtion that gets all the parameters passed in a url
function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.has(name) ? params.get(name) : "";
}

const groups = [
    {
        groupId:     "G1234",
        dateCreated: "03-Sep-2023",
        name:        "Team AAA",
        status:      "Team AAA",
        taskId:      "12390",
    },
    {
        groupId:     "G1235",
        dateCreated: "02-Sep-2023",
        name:        "Team Hulk",
        status:      "Team Hulk",
        taskId:      "-",
    },
    {
        groupId:     "G1236",
        dateCreated: "02-Sep-2023",
        name:        "Team Azure",
        status:      "Unassigned",
        taskId:      "-",
    },
    {
        groupId:     "G1237",
        dateCreated: "02-Sep-2023",
        name:        "Team BBB",
        status:      "Unassigned",
        taskId:      "-",
    },
    {
        groupId:     "G1238",
        dateCreated: "02-Sep-2023",
        name:        "Team Offense",
        status:      "Assigned",
        taskId:      "12391",
    },
    {
        groupId:     "G1239",
        dateCreated: "02-Sep-2023",
        name:        "Team Defense",
        status:      "Assigned",
        taskId:      "12392",
    },
    {
        groupId:     "G1210",
        dateCreated: "02-Sep-2023",
        name:        "Team Support",
        status:      "Assigned",
        taskId:      "12393",
    },
    {
        groupId:     "G1211",
        dateCreated: "02-Sep-2023",
        name:        "Team Komsat",
        status:      "Assigned",
        taskId:      "12394",
    },
    {
        groupId:     "G2312",
        dateCreated: "02-Sep-2023",
        name:        "Team Strong",
        status:      "Assigned",
        taskId:      "12395",
    },
];

const securityOfficers = [
    {
        userId: "32112",
        name:   "Goola Wola",
    },
    {
        userId: "32113",
        name:   "David Guteela",
    },
    {
        userId: "32114",
        name:   "Usher Leeva",
    },
    {
        userId: "32115",
        name:   "Gento Lomibao",
    },
    {
        userId: "32116",
        name:   "Anderson Lee",
    },
    {
        userId: "32117",
        name:   "Happy Forrest",
    },

];

// Function to create a table row for groups
function createTableRowGroup(group) {
    const row = document.createElement("tr");
    const groupIdCell = document.createElement("td");
    const dateCreatedCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const taskIdCell = document.createElement("td");
    const groupLink = document.createElement("a");

    groupLink.href = "javascript:void(0);";
    groupLink.textContent = `#${group.groupId}`;
    groupLink.onclick = function () {
        redirectToGroupsUpdatePage(group.groupId, group.name);
    };

    groupIdCell.appendChild(groupLink);
    dateCreatedCell.textContent = group.dateCreated;
    nameCell.textContent = group.name;
    statusCell.textContent = group.status;
    taskIdCell.textContent = group.taskId;

    row.appendChild(groupIdCell);
    row.appendChild(dateCreatedCell);
    row.appendChild(nameCell);
    row.appendChild(statusCell);
    row.appendChild(taskIdCell);

    return row;
}

// Function to create a table row for SOs
function createTableRowSo(so) {
    const row = document.createElement("tr");
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    const userIdCell = document.createElement("td");
    const nameCell = document.createElement("td");

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkboxCell.appendChild(checkbox);
    
    userIdCell.textContent = so.userId;
    nameCell.textContent = so.name;

    row.appendChild(checkboxCell);
    row.appendChild(userIdCell);
    row.appendChild(nameCell);

    return row;
}

// Function to populate the table with data
function populateTable(name) {
    if(name == 'groups') {
        const groupTableBody = document.getElementById("groupTableBody");
        groupTableBody.innerHTML = "";
        groups.forEach(group => {
            const tableRow = createTableRowGroup(group);
            groupTableBody.appendChild(tableRow);
        });        
    } else if(name == 'so') {
        const soTableBody = document.getElementById("soTableBody");
        soTableBody.innerHTML = "";
        securityOfficers.forEach(so => {
            const tableRow = createTableRowSo(so);
            soTableBody.appendChild(tableRow);
        });        
    } 
}

function init() {
    const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop();
    const groupName = document.getElementById("group-name");
    console.log("Current Page Name:", currentPageName);

    
    if(currentPageName == 'groups_create.html') {
        //popoulate the list of security officers
        populateTable('so');
    } else if(currentPageName == 'groups_update.html') {
        if(groupName!=null) {
            //gets the parameter passed from groups.html
            groupName.value = getUrlParam("groupName");
        }
    } else {
        //populate the list of groups
        populateTable('groups');
    }
}
init();