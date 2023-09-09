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
    }
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

function redirectToReportsGroupPage(taskId, taskName) {
    const baseUrl = 'reports_group.html';
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

    if (currentPageName == 'groups_create.html' || currentPageName == 'groups_update.html') {
        window.location.href = 'groups.html';
    } else if (currentPageName == 'reports_group.html' || currentPageName == 'reports_so.html') {
        window.location.href = 'reports.html';
    }
}

function backButton() {
    const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop();
    console.log("Current Page Name:", currentPageName);
    if (currentPageName == 'reports_so.html') {
        window.location.href = 'reports_group.html';
    }
    

}

init();