function init() {
    document.getElementById('select-all').addEventListener('change', selectAll);
    document.getElementById("createGroupBtn").addEventListener("click", confirmCreateGroup);
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
    const confirmation = window.confirm("Are you sure you want to proceed?");

    if (confirmation) {
        alert("Proceeding with creating the group.");
    } else {
        alert("Cancelled.");
    }
}