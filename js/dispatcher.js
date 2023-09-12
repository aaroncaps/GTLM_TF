const reports = [
    {
        taskId: "12315",
        taskName: "Mikey Salis",
        lastSubmitted: "03-Sep-2023"
    },
    {
        taskId: "12314",
        taskName: "On Site check and surveillance team needed",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12313",
        taskName: "Threat assessment needed at area BHD",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12312",
        taskName: "Asset surveillance required for Mr. Chong",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12311",
        taskName: "Surveillance at DKLL",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12310",
        taskName: "Surveillance at DKJJ",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12309",
        taskName: "Surveillance at DKFF",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12308",
        taskName: "Surveillance at DKDD",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12307",
        taskName: "Surveillance at DKD12",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12306",
        taskName: "Surveillance at BBBB",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12305",
        taskName: "Surveillance at GGGG",
        lastSubmitted: "02-Sep-2023"
    },
    {
        taskId: "12304",
        taskName: "Surveillance at HHH",
        lastSubmitted: "01-Sep-2023"
    },
];


const reportsGroup = [
    {
        userId: "71234",
        dateSubmitted: "03-Sep-2023",
        name: "Yoyo Moley"
    },
    {
        userId: "21235",
        dateSubmitted: "02-Sep-2023",
        name: "Henry Cavil"
    },
    {
        userId: "31236",
        dateSubmitted: "02-Sep-2023",
        name: "Uma Therman"
    },
    {
        userId: "51237",
        dateSubmitted: "-",
        name: "Blade Heley"
    },
];

const Supervisiors = [
    {
        userId: "35112",
        name: "Lee Mei",
    },
    {
        userId: "35113",
        name: "Metul Jess",
    },
    {
        userId: "35114",
        name: "Wilson Josh",
    },
    {
        userId: "35115",
        name: "John Wick",
    },
    {
        userId: "35116",
        name: "Andrew Pit",
    },
    {
        userId: "35117",
        name: "James Bone",
    },
];

const groups = [
    {
        groupId: "G1234",
        dateCreated: "03-Sep-2023",
        name: "Team AAA",
        taskId: "12313",
        supervisior: "35112",
    },
    {
        groupId: "G1235",
        dateCreated: "02-Sep-2023",
        name: "Team Hulk",
        taskId: "-",
        supervisior: "35113",
    },
    {
        groupId: "G1236",
        dateCreated: "02-Sep-2023",
        name: "Team Azure",
        taskId: "-",
        supervisior: "35114",
    },
    {
        groupId: "G1237",
        dateCreated: "02-Sep-2023",
        name: "Team BBB",
        taskId: "-",
        supervisior: "35115",
    },
    {
        groupId: "G1238",
        dateCreated: "02-Sep-2023",
        name: "Team Offense",
        taskId: "12391",
        supervisior: "35116",
    },
    {
        groupId: "G1239",
        dateCreated: "02-Sep-2023",
        name: "Team Defense",
        taskId: "12392",
        supervisior: "35117",
    },
    {
        groupId: "G1210",
        dateCreated: "02-Sep-2023",
        name: "Team Support",
        taskId: "12393",
        supervisior: "35112",
    },
    {
        groupId: "G1211",
        dateCreated: "02-Sep-2023",
        name: "Team Komsat",
        taskId: "12394",
        supervisior: "35113",
    },
    {
        groupId: "G2312",
        dateCreated: "02-Sep-2023",
        name: "Team Strong",
        taskId: "12395",
        supervisior: "35114",
    },
];







const Tasks = [
    {
        tasknumber: "12315",
        task: "Mikey Salis",
        datecreated: "03-Sep-2023",
        status: "In Review",
        assignedto: "-",
    },
    {
        tasknumber: "12314",
        task: "On Site check and surveillance team needed",
        datecreated: "02-Sep-2023",
        status: "Assigned & In Progress",
        assignedto: "-",
    },
    {
        tasknumber: "12313",
        task: "Threat assessment needed at area BHD",
        datecreated: "02-Sep-2023",
        status: "In Review",
        assignedto: "-",
    },
    {
        tasknumber: "12312",
        task: "Asset surveillance required for Mr. Chong",
        datecreated: "02-Sep-2023",
        status: "Assigned & In Progress",
        assignedto: "-",
    },
    {
        tasknumber: "12311",
        task: "Surveillance at DKLL",
        datecreated: "02-Sep-2023",
        status: "In Review",
        assignedto: "May Sander",
    },
    {
        tasknumber: "12310",
        task: "Surveillance at DKJJ",
        datecreated: "02-Sep-2023",
        status: "Declined Tasks",
        assignedto: "Jake Lim",
    },
    {
        tasknumber: "12309",
        task: "Surveillance at DKFF",
        datecreated: "02-Sep-2023",
        status: "Completed",
        assignedto: "Luke Meyaa",
    },
    {
        tasknumber: "12308",
        task: "Surveillance at DKDD",
        datecreated: "02-Sep-2023",
        status: "Declined Tasks",
        assignedto: "Tim Horton",
    },
    {
        tasknumber: "12307",
        task: "Surveillance at DKD12",
        datecreated: "02-Sep-2023",
        status: "Completed",
        assignedto: "Luke Moses",
    },
    {
        tasknumber: "12306",
        task: "Surveillance at BBBB",
        datecreated: "02-Sep-2023",
        status: "Incoming Tasks",
        assignedto: "Avril Izak",
    },
    {
        tasknumber: "12305",
        task: "Surveillance at GGGG",
        datecreated: "02-Sep-2023",
        status: "Incoming Tasks",
        assignedto: "Gigi Hadid",
    },
    {
        tasknumber: "12304",
        task: "Surveillance at HHH",
        datecreated: "01-Sep-2023",
        status: "In Review",
        assignedto: "Ashley Li",
    },
];



function init() {
    const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop();

    if (currentPageName == 'reports.html') {
        //popoulate the list of task for reports
        gettabledata('reports');
    } else if (currentPageName == 'reports_group.html') {
        const taskId = document.getElementById("id-task");
        const taskGroup = document.getElementById("id-group");
        const supervisiorName = document.getElementById("supervisior-name");
        const supervisiorreport = document.getElementById("supervisior-report-so");
        const divgroup = document.getElementById("id-task-group");
        divgroup.style.display = "none";
        groups.forEach(group => {
            if(group.taskId == getUrlParam("taskId")){
                taskGroup.innerText = group.groupId;
                Supervisiors.forEach(Supervisior => {
                    if(Supervisior.userId == group.supervisior){
                        supervisiorName.innerText = Supervisior.name;
                    }
                });
                divgroup.style.display = "block";
            }
        });
        supervisiorreport.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; //Dummy data
       
        taskId.innerText = "#" + getUrlParam("taskId") + " - " + getUrlParam("taskName");
        gettabledata('reportsGroup')
    } else if (currentPageName == 'reports_so.html') {
        const userId = document.getElementById("id-user");
        const userName = document.getElementById("id-name");
        const report = document.getElementById("id-report");
        if (userId != null && userName != null) {
            //gets the parameter passed from reports.html
            userId.value = "#" + getUrlParam("userId");
            userName.value = getUrlParam("userName");
        }
        report.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; //Dummy data
        displayImageLink();
    } else if(currentPageName == "tasks.html"){
        toggleView();
        filterdropdown.addEventListener("change", function() {
            var dropdown = document.getElementById("filterdropdown");
            var selectedValue = dropdown.value;
            filtertable(selectedValue)
        });
        document.getElementById('toggleViewButton').addEventListener('click', toggleView);
        gettabledata('tasks');
    }else if(currentPageName == "Assignedtask.html" || currentPageName == "Declinedtask.html" || currentPageName == "Incomingtask.html"){
        const tasknumber = document.getElementById('task-number');
    const datecreated = document.getElementById('date-created');
    const task = document.getElementById('task');
    const status = document.getElementById('status');
    const assignedto = document.getElementById('assigned-to');
    const detail = document.getElementById('detail');
    if(getUrlParam("taskId")){
    Tasks.forEach(Task => {
        if(Task.tasknumber == getUrlParam("taskId")){
            tasknumber.value = Task.tasknumber;
            datecreated.value = Task.datecreated;
            task.value = Task.task;
            status.value = Task.status;
            assignedto.value = Task.assignedto;
            detail.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        if(currentPageName == "Declinedtask.html"){
            document.getElementById('reason').value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        }
        }
       
    });
}
else{
    cancelButton();
}

    }
}

function gettabledata(name) {
    if (name == 'reports') {
        const reportsTableBody = document.getElementById("reportsTableBody");
        reportsTableBody.innerHTML = "";
        reports.forEach(report => {
            const tableRow = createTableReports(report);
            reportsTableBody.appendChild(tableRow);
        });
    } else if (name == 'reportsGroup') {
        const reportsGroupTableBody = document.getElementById("reportsGroupTableBody");
        reportsGroupTableBody.innerHTML = "";
        reportsGroup.forEach(reportGroup => {
            const tableRow = createTableReportsGroup(reportGroup);
            reportsGroupTableBody.appendChild(tableRow);
        });
    } else if (name == 'tasks') {
        const reportsGroupTableBody = document.getElementById("TaskTableBody");
        reportsGroupTableBody.innerHTML = "";
        Tasks.forEach(Task => {
            const tableRow = createTableTask(Task);
            reportsGroupTableBody.appendChild(tableRow);
        });
    }
}

function createTableTask(Task) {
    const row = document.createElement("tr");
    const taskidcell = document.createElement("td");
    const taskcell = document.createElement("td");
    const datecreatedcell = document.createElement("td");
    const statuscell = document.createElement("td");
    const assignedtocell = document.createElement("td");
    const taskLink = document.createElement("a");

    taskLink.href = "javascript:void(0);";
    taskLink.textContent = `#${Task.tasknumber}`;
    taskLink.onclick = function () {
        if(Task.status == "Incoming Tasks"){
            redirectToIncomingtaskPage(Task.tasknumber, Task.task);
        }else if(Task.status == "Declined Tasks"){
            redirectToDeclindestaskPage(Task.tasknumber, Task.task);
        }else if(Task.status == "Assigned & In Progress"){
            redirectToAssignedTaskPage(Task.tasknumber, Task.task);
        }
    };

    taskidcell.appendChild(taskLink);
    taskcell.textContent = Task.task;
    datecreatedcell.textContent = Task.datecreated;
    statuscell.textContent = Task.status;
    assignedtocell.textContent = Task.assignedto;

    row.appendChild(taskidcell);
    row.appendChild(taskcell);
    row.appendChild(datecreatedcell);
    row.appendChild(statuscell);
    row.appendChild(assignedtocell);

    return row;
}

function createTableReports(report) {
    const row = document.createElement("tr");
    const taskIdCell = document.createElement("td");
    const taskNameCell = document.createElement("td");
    const lastSubmittedCell = document.createElement("td");
    const reportLink = document.createElement("a");

    reportLink.href = "javascript:void(0);";
    reportLink.textContent = `#${report.taskId}`;
    reportLink.onclick = function () {
        redirectToReportsGroupPage(report.taskId, report.taskName);
    };

    taskIdCell.appendChild(reportLink);
    taskNameCell.textContent = report.taskName;
    lastSubmittedCell.textContent = report.lastSubmitted;

    row.appendChild(taskIdCell);
    row.appendChild(taskNameCell);
    row.appendChild(lastSubmittedCell);

    return row;
}

function createTableReportsGroup(reportGroup) {
    const row = document.createElement("tr");
    const userIdCell = document.createElement("td");
    const dateSubmittedCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const reportGroupLink = document.createElement("a");

    reportGroupLink.href = "javascript:void(0);";
    reportGroupLink.textContent = `#${reportGroup.userId}`;
    reportGroupLink.onclick = function () {
        redirectToReportsGroupSoPage(reportGroup.userId, reportGroup.name);
    };

    userIdCell.appendChild(reportGroupLink);
    dateSubmittedCell.textContent = reportGroup.dateSubmitted;
    nameCell.textContent = reportGroup.name;

    row.appendChild(userIdCell);
    row.appendChild(dateSubmittedCell);
    row.appendChild(nameCell);

    return row;
}

function redirecttotask(){
    const baseUrl = 'tasks.html';
    
    window.location.href = baseUrl;
}

function redirectToReportsGroupPage(taskId, taskName) {
    const baseUrl = 'reports_group.html';
    const queryParams = `?taskId=${encodeURIComponent(taskId)}&taskName=${encodeURIComponent(taskName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

function redirectToDeclindestaskPage(taskId, taskName) {
    const baseUrl = 'Declinedtask.html';
    const queryParams = `?taskId=${encodeURIComponent(taskId)}&taskName=${encodeURIComponent(taskName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

function redirectToIncomingtaskPage(taskId, taskName) {
    const baseUrl = 'Incomingtask.html';
    const queryParams = `?taskId=${encodeURIComponent(taskId)}&taskName=${encodeURIComponent(taskName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

function redirectToAssignedTaskPage(taskId, taskName) {
    const baseUrl = 'Assignedtask.html';
    const queryParams = `?taskId=${encodeURIComponent(taskId)}&taskName=${encodeURIComponent(taskName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

function redirectToReportsGroupSoPage(userId, userName) {
    const baseUrl = 'reports_so.html';
    const queryParams = `?userId=${encodeURIComponent(userId)}&userName=${encodeURIComponent(userName)}`;
    const newUrl = baseUrl + queryParams;
    window.location.href = newUrl;
}

function displayImageLink() {
    const anchor = document.createElement('a');
    anchor.href = '../images/security2.jpg';
    anchor.target = '_blank';

    const image = document.createElement('img');
    image.className = 'image-link';
    image.src = '../images/security2.jpg';
    image.alt = 'A Security Officer in action';

    anchor.appendChild(image);

    const container = document.getElementById('attachedImage');
    container.appendChild(anchor);
}

function getUrlParam(name)
{
    const params = new URLSearchParams(window.location.search);
    return params.has(name) ? params.get(name) : "";
}

function confirmSubmitReport() {
    const idReport = document.getElementById('id-report');
    if (idReport.value !== '') {
        const confirmation = window.confirm("Confirm submit report?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });
        }
    }
}

function cancelButton() {
    const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop();
    console.log("Current Page Name:", currentPageName);

    if (currentPageName == 'Assignedtask.html' || currentPageName == "Declinedtask.html" || currentPageName == "Incomingtask.html") {
        window.location.href = 'tasks.html';
    } else if (currentPageName == 'reports_group.html' || currentPageName == 'reports_so.html') {
        window.location.href = 'reports.html';
    }
}


function toggleView() {
    const kanbanWrapper = document.querySelector('.kanban_wrapper');
    const listview = document.querySelector('.ListView');
    const col1 = document.querySelector('.col1');
    const col2 = document.querySelector('.col2');
    const col3 = document.querySelector('.col3');
    const col4 = document.querySelector('.col4');
    const col5 = document.querySelector('.col5');
    const dropdown = document.querySelector('.filterstatus');
    // Check if the Kanban view is currently displayed
    if (kanbanWrapper.style.display === '' || kanbanWrapper.style.display === 'none') {

        document.getElementById("toggleViewButton").innerText = "List View";
        // Switch back to Kanban view
        kanbanWrapper.style.display = 'flex';
        listview.style.display = 'none';
        dropdown.style.display = 'none';
        col1.style.display = 'block';
        col2.style.display = 'block';
        col3.style.display = 'block';
        col4.style.display = 'block';
        col5.style.display = 'block';
    } else {
       // Switch to List view
       document.getElementById("toggleViewButton").innerText = "Kanban View";
       kanbanWrapper.style.display = 'none';
       listview.style.display = 'block';
       dropdown.style.display = 'block';
       col1.style.display = 'none';
       col2.style.display = 'none';
       col3.style.display = 'none';
       col4.style.display = 'none';
       col5.style.display = 'none';
    }
}

function filtertable(text){
    if(text != "All"){
    var input, filter, table, tr, td, i, txtValue;
  input = text;
  filter = input.toUpperCase();
  table = document.getElementById("tasktable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}else{
    var input, filter, table, tr, td, i, txtValue;
    input = "";
    filter = input.toUpperCase();
    table = document.getElementById("tasktable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}
}



function cancelTask() {
    // Clear all textboxes and the textarea
    document.getElementById("task1").value = "";
    document.getElementById("task2").value = "";
    document.getElementById("task3").value = "";
    document.getElementById("task4").value = "";
    document.getElementById("task5").value = "";
    document.getElementById("notes").value = "";
}

function Submit(pagename) {
    const tasknumber = document.getElementById('task-number');
    const datecreated = document.getElementById('date-created');
    const task = document.getElementById('task');
    const status = document.getElementById('status');
    const assignedto = document.getElementById('assigned-to');
    const detail = document.getElementById('detail');

    if(pagename == 'AssignedTask'){
        const confirmation = window.confirm("Are you sure you want to complete Task?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });
        }
    }else if(pagename == 'DeclinedTask' || pagename == 'IncomingTask'){
        if (assignedto.value !== '' && detail.value !== ''){
        const confirmation = window.confirm("Do you want to assign the task to " + assignedto.value + " ?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });
        }
    }
    }
    
    
    
    
    
    {
    if (tasknumber.value !== '' && datecreated.value !== '' && task.value !== '' && status.value !== '' && assignedto.value !== '' && detail.value !== '') {
        const confirmation = window.confirm("Are you sure you want to complete Task?");
        if (confirmation) {
            document.getElementById("myForm").submit();
        } else {
            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }
    }
}
}


function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function filterItems() {
    var input, filter, ul, li, i;
    input = document.getElementById("dropdownsearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("itemList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var dropdownItems = document.querySelectorAll("#itemList li");
        for (var i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].addEventListener("click", function () {
                var selectedItem = this.textContent;
                document.getElementById("assigned-to").value = selectedItem;
                document.getElementById("myDropdown").style.display = "none";
            });
        }


init();