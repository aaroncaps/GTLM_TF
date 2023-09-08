function init() {
    const groupName = document.getElementById("group-name");
    if(groupName!=null) {
        //gets the parameter passed from groups.html
        groupName.value = getUrlParam("groupName");
    }
    
}
init();

//function called by groups.html and redirects to groups_update.html
function redirectToGroupsUpdatePage(groupId, groupName) {
    const baseUrl = 'groups_update.html'; 
    const queryParams = `?groupId=${encodeURIComponent(groupId)}&groupName=${encodeURIComponent(groupName)}`;
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