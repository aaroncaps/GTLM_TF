const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        const monthYear = document.getElementById("month-year");
        const calendarTable = document.getElementById("calendar-table");
        const selectedDateElement = document.getElementById("selected-date");
        const taskList = document.getElementById("task-list");
        const taskInput = document.getElementById("task-input");
        const addTaskButton = document.getElementById("add-task");

        let currentDate = new Date();
        let selectedDate = currentDate;

        function generateCalendar() {
            // Clear the previous calendar
            calendarTable.querySelector("tbody").innerHTML = "";

            // Get the first day of the current month
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

            // Calculate the number of days in the current month
            const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            const totalDays = lastDayOfMonth.getDate();

            // Calculate the day of the week for the first day of the month
            const firstDayOfWeek = firstDayOfMonth.getDay();

            // Create the calendar grid
            let date = 1;
            for (let row = 0; row < 6; row++) {
                const newRow = calendarTable.querySelector("tbody").insertRow();
                for (let col = 0; col < 7; col++) {
                    if (row === 0 && col < firstDayOfWeek) {
                        // Add empty cells before the first day of the month
                        const cell = newRow.insertCell();
                        cell.textContent = "";
                    } else if (date <= totalDays) {
                        // Add cells with date
                        const cell = newRow.insertCell();
                        cell.textContent = date;
                        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
                        cell.addEventListener("click", () => {
                            const allCells = calendarTable.querySelectorAll('td');
                                allCells.forEach(cell => {
                                        cell.className = '';
                                });
                            cell.classList.add('selected')
                            onDateClick(clickedDate);
                        });
                        
                        date++;
                    }
                }
            }

            // Update the month and year in the header
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        }

        function onDateClick(date) {
            
        
            selectedDate = date;
            selectedDateElement.textContent = date.toDateString();
       
            
            displayTasksForDate(date);
        }

        function displayTasksForDate(date) {
            // Here you can implement code to display tasks for the selected date.
            // You might use an array or some storage mechanism to manage tasks for each date.
            // For simplicity, we'll just display an empty task list.

            taskList.innerHTML = "<li>No tasks for this date.</li>";
        }

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                return;
            }

            // Here you can implement code to add the task to the selected date.
            // You might use an array or some storage mechanism to manage tasks for each date.

            // For now, let's just refresh the displayed tasks.
            displayTasksForDate(selectedDate);

            // Clear the task input field
            taskInput.value = "";
        }

        prevButton.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar();
            onDateClick(selectedDate);
        });

        nextButton.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar();
            onDateClick(selectedDate);
        });

        addTaskButton.addEventListener("click", addTask);

        // Initial calendar generation
        generateCalendar();