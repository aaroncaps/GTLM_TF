//tableId: pass in the id of the table
function selectAllCheckboxes(tableId) {
    const selectAllCheckbox = document.getElementById(`selectAll${tableId.charAt(tableId.length - 1)}`);
    const checkboxes = document.querySelectorAll(`#${tableId} tbody input[type="checkbox"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

//tableId: pass in the id of the table
function confirmCreateGroup(tableId) {
    const groupName = document.getElementById('group-name');
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    
    if(groupName.value !== '' && dateFrom.value !== '' && dateTo.value !== '') {
        const confirmation = window.confirm("Confirm create group " + groupName.value + " for the below Security Officers?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });
            
        }
    }
}

function confirmUpdateGroup(tableId) {
    const groupName = document.getElementById('group-name');
    
    if(groupName.value !== '') {
        const confirmation = window.confirm("Confirm add Security Officer below to " + groupName.value + " group?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });
            
        }
    }
}

function confirmDeleteGroup(tableId) {
    const groupName = document.getElementById('group-name');
    
    if(groupName.value !== '') {
        const confirmation = window.confirm("Confirm delete  " + groupName.value + " group?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });
            
        }
    }
}

function confirmDeleteSO(tableId) {
    const groupName = document.getElementById('group-name');
    
    if(groupName.value !== '') {
        const confirmation = window.confirm("Confirm delete Security Officer from  " + groupName.value + " group?\n" + getCheckedRowsData(tableId));
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });
            
        }
    }
}

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

function cancelButton() {
    window.location.href = 'groups.html';
}
