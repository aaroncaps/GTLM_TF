function init() {
}
init();

function selectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function confirmCreateGroup() {
    const groupName = document.getElementById('group-name');
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
   
    getCheckedRowsData();
    
    if(groupName.value !== '' && dateFrom.value !== '' && dateTo.value !== '') {
        const confirmation = window.confirm("Confirm create group " + groupName.value + " for the below Security Officers?\n" + getCheckedRowsData());
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });
            
        }
    }
    
}

function getCheckedRowsData() {
    
    const checkedRowsData = [];
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            const userId = row.querySelector('td:nth-child(2)').textContent;
            const name = row.querySelector('td:nth-child(3)').textContent;
            checkedRowsData.push({ userId, name });
        }
    });
     // Generate a message with the checked IDs and Names
     const message = checkedRowsData.map(function (data) {
        return `   ${data.userId} ${data.name}`;
    }).join('\n');
    
    return message;
}