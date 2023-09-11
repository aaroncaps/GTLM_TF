// Existing tasks data
const tasks = [
  { number: 12315, task: "Secure perimeter fencing around BFH area" },
  { number: 12314, task: "On Site check and surveillance team needed" },
  { number: 12313, task: "Threat assessment needed at area BHD" },
  { number: 12312, task: "Asset surveillance required for Mr. Chong" },
  { number: 12311, task: "Surveillance at DKLL" },
  { number: 12310, task: "Surveillance at DKJJ" },
  { number: 12309, task: "Surveillance at DKFF" }
];

document.addEventListener('DOMContentLoaded', function() {
  const reportsTableBody = document.getElementById('reportsTableBody');

  tasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="insert_report.html" onclick="redirectToInsertReport(${task.number}, '${task.task}')">${task.number}</a></td>
      <td>${task.task}</td>
    `;
    reportsTableBody.appendChild(row);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const taskNumber = sessionStorage.getItem('taskNumber');
  const taskName = sessionStorage.getItem('taskName');

  if (taskNumber && taskName) {
      document.getElementById('id-task').value = taskNumber;
      document.getElementById('task-name').value = taskName;
  }
});



function enableSubmitButton() {
  const taskNumber = document.getElementById('id-task').value;
  const taskName = document.getElementById('task-name').value;
  const report = document.getElementById('id-report').value;

  if (taskNumber && taskName && report) {
      document.getElementById('createGroupBtn').removeAttribute('disabled');
  } else {
      document.getElementById('createGroupBtn').setAttribute('disabled', 'disabled');
  }
}

function submitForm() {
  var confirmSubmit = confirm("Are you sure you want to submit this report?");

  if (confirmSubmit) {
      var taskNumber = document.getElementById('id-task').value;
      window.location.href = `reports.html?taskNumber=${taskNumber}`;
  }
}



function cancelButton() {
  window.location.href = "reports.html";
}

function displayImageNames(input) {
  var imageNamesDisplay = document.getElementById('imageNames');
  imageNamesDisplay.textContent = 'Selected Images: ';

  for (var i = 0; i < input.files.length; i++) {
      var imageName = input.files[i].name;
      imageNamesDisplay.textContent += imageName + ', ';
  }

  // Remove trailing comma and space
  imageNamesDisplay.textContent = imageNamesDisplay.textContent.slice(0, -2);
}

document.addEventListener('DOMContentLoaded', function() {
  const reportsTableBody = document.getElementById('reportsTableBody');
  const tasks = [
      { number: 12315, task: "Secure perimeter fencing around BFH area" },
      { number: 12314, task: "On Site check and surveillance team needed" },
      { number: 12313, task: "Threat assessment needed at area BHD" },
      { number: 12312, task: "Asset surveillance required for Mr. Chong" },
      { number: 12311, task: "Surveillance at DKLL" },
      { number: 12310, task: "Surveillance at DKJJ" },
      { number: 12309, task: "Surveillance at DKFF" }
  ];

  tasks.forEach(task => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><a href="insert_report.html" onclick="redirectToInsertReport(${task.number}, '${task.task}')">${task.number}</a></td>
          <td>${task.task}</td>
      `;
      reportsTableBody.appendChild(row);
  });
});

function redirectToInsertReport(taskNumber, taskName) {
  sessionStorage.setItem('taskNumber', taskNumber);
  sessionStorage.setItem('taskName', taskName);
}



document.getElementById('id-task').addEventListener('input', enableSubmitButton);
document.getElementById('task-name').addEventListener('input', enableSubmitButton);
document.getElementById('id-report').addEventListener('input', enableSubmitButton);

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const taskNumberToRemove = urlParams.get('taskNumber');

  if (taskNumberToRemove) {
      const rowToRemove = document.getElementById('row_' + taskNumberToRemove);

      if (rowToRemove) {
          rowToRemove.parentNode.removeChild(rowToRemove);
      }
  }
});

/**task list view start  */
document.addEventListener('DOMContentLoaded', function() {
  const reportsTableBody = document.getElementById('TaskTableBody');

  const tasksData = [
      { number: "#12315", dateCreated: "03-Sep-2023", task: "Secure perimeter fencing around BFH area", assignedTo: "Team HIFI" },
      { number: "#12314", dateCreated: "02-Sep-2023", task: "On Site check and surveillance team needed", assignedTo: "You" },
      { number: "#12313", dateCreated: "01-Sep-2023", task: "Threat assessment needed at area BHD", assignedTo: "You" },
      { number: "#12312", dateCreated: "28-Aug-2023", task: "Asset surveillance required for Mr. Chong", assignedTo: "You" },
      { number: "#12311", dateCreated: "26-Aug-2023", task: "Surveillance at DKLL", assignedTo: "You" },
      { number: "#12310", dateCreated: "24-Aug-2023", task: "Surveillance at DKJJ", assignedTo: "You" },
      { number: "#12309", dateCreated: "21-Aug-2023", task: "Surveillance at DKFF", assignedTo: "Team Lim" },
      { number: "#12308", dateCreated: "17-Aug-2023", task: "Surveillance at DKDD", assignedTo: "Team Izak" },
      { number: "#12307", dateCreated: "12-Aug-2023", task: "Surveillance at DKD12", assignedTo: "Team Moses" },
      { number: "#12306", dateCreated: "09-Sep-2023", task: "Surveillance at BBBB", assignedTo: "You" },
  ];

  tasksData.forEach(task => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${task.number}</td>
          <td>${task.dateCreated}</td>
          <td>${task.task}</td>
          <td>${task.assignedTo}</td>
      `;
      reportsTableBody.appendChild(row);
  });
});
