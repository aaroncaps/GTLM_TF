// Existing tasks data
const tasksData = [
  { number: "12315", dateCreated: "03-Sep-2023", task: "Secure perimeter fencing around BFH area", assignedTo: "Team HIFI" },
  { number: "12314", dateCreated: "02-Sep-2023", task: "On Site check and surveillance team needed", assignedTo: "You" },
  { number: "12313", dateCreated: "01-Sep-2023", task: "Threat assessment needed at area BHD", assignedTo: "You" },
  { number: "12312", dateCreated: "28-Aug-2023", task: "Asset surveillance required for Mr. Chong", assignedTo: "You" },
  { number: "12311", dateCreated: "26-Aug-2023", task: "Surveillance at DKLL", assignedTo: "You" },
  { number: "12310", dateCreated: "24-Aug-2023", task: "Surveillance at DKJJ", assignedTo: "You" },
  { number: "12309", dateCreated: "21-Aug-2023", task: "Surveillance at DKFF", assignedTo: "Team Lim" },
  { number: "12308", dateCreated: "17-Aug-2023", task: "Surveillance at DKDD", assignedTo: "Team Izak" },
  { number: "12307", dateCreated: "12-Aug-2023", task: "Surveillance at DKD12", assignedTo: "Team Moses" },
  { number: "12306", dateCreated: "09-Sep-2023", task: "Surveillance at BBBB", assignedTo: "You" },
];

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
  const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop();
  if(currentPageName == "reports.html"){
  const reportsTableBody = document.getElementById('reportsTableBody');
  tasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="insert_report.html" onclick="redirectToInsertReport(${task.number}, '${task.task}')">#${task.number}</a></td>
      <td>${task.task}</td>
    `;
    reportsTableBody.appendChild(row);
  });

  
}else if(currentPageName == "tasks.html"){
  toggleView();
  document.getElementById('toggleViewButton').addEventListener('click', toggleView);
  const reportsTableBody = document.getElementById('TaskTableBody');
  tasksData.forEach(task => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><a href="task_view.html" onclick="redirectToTaskview(${task.number}, '${task.task}')">#${task.number}</a></td>
          <td>${task.dateCreated}</td>
          <td>${task.task}</td>
          <td>${task.assignedTo}</td>
      `;
      reportsTableBody.appendChild(row);
  });
}else if(currentPageName == "insert_report.html"){
  const taskNumber = sessionStorage.getItem('taskNumber');
  const taskName = sessionStorage.getItem('taskName');

  if (taskNumber && taskName) {
      document.getElementById('id-task').value = taskNumber;
      document.getElementById('task-name').value = taskName;
  }

}else if(currentPageName == "task_view.html"){
  const taskNumber = sessionStorage.getItem('taskNumber');
  tasksData.forEach(task => {
    if(task.number == taskNumber){
      document.getElementById('id-task').value = task.number;
      document.getElementById('task-name').value = task.task;
      document.getElementById('date').value = task.dateCreated;
      document.getElementById('status').value = "Assigned & In Progress";
      document.getElementById('details').value =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; //Dummy data
    }
  });
 

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
  const idReport = document.getElementById('id-report');
  if (idReport.value !== '') {
  var confirmSubmit = confirm("Are you sure you want to submit this report?");

  if (confirmSubmit) {
      var taskNumber = document.getElementById('id-task').value;
      window.location.href = `reports.html?taskNumber=${taskNumber}`;
  }
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


function redirectToInsertReport(taskNumber, taskName) {
  sessionStorage.setItem('taskNumber', taskNumber);
  sessionStorage.setItem('taskName', taskName);
}

function redirectToTaskview(taskNumber, taskName) {
  sessionStorage.setItem('taskNumber', taskNumber);
  sessionStorage.setItem('taskName', taskName);
}

function toggleView() {
  const kanbanWrapper = document.querySelector('.kanban_wrapper');
  const listview = document.querySelector('.ListView');
  const col1 = document.querySelector('.col1');
  const col2 = document.querySelector('.col2');
  const col3 = document.querySelector('.col3');
  const col4 = document.querySelector('.col4');
  const col5 = document.querySelector('.col5');
  // Check if the Kanban view is currently displayed
  if (kanbanWrapper.style.display === '' || kanbanWrapper.style.display === 'none') {

      document.getElementById("toggleViewButton").innerText = "List View";
      // Switch back to Kanban view
      kanbanWrapper.style.display = 'flex';
      listview.style.display = 'none';
      col1.style.display = 'flex';
  } else {
     // Switch to List view
     document.getElementById("toggleViewButton").innerText = "Kanban View";
     kanbanWrapper.style.display = 'none';
     listview.style.display = 'block';
     col1.style.display = 'flex';
  }
}

