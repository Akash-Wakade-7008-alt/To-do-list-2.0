let showFromBtn = document.querySelector(".show-form-btn");
      let firstCard = document.querySelector(".card-1");
      let secondCard = document.querySelector(".card-2");
      let form = document.querySelector(".addTaskFrom");

      firstCard.style.display = "none";

      showFromBtn.addEventListener("click", function () {
        firstCard.style.display = "block";
        secondCard.style.display = "none";
      });

      // local storage

      let tasks = JSON.parse(localStorage.getItem("tasks_wednesday")) || [];

      // display function

      function display() {
        let tableHeading = document.querySelector(".table-heading");
        let tableBody = document.querySelector(".table-body");
        let headingText = document.querySelector(".task-heading");

        // always clear input first
        tableBody.innerHTML = "";

        // delete heading section when there is no data in a table
        if (tasks.length === 0) {
          tableHeading.style.display = "none";
          headingText.style.display = "block";
        } else {
          tableHeading.style.display = "table-header-group";
          headingText.style.display = "none";
        }

        tasks.forEach((task, index) => {
          // create rows

          let row = tableBody.insertRow();
          let checkCell = row.insertCell(0);
          let timeCell = row.insertCell(1);
          let taskCell = row.insertCell(2);
          let editCell = row.insertCell(3);
          let deleteCell = row.insertCell(4);

          // insert values in cell

          checkCell.innerHTML = '<input type="checkbox">';
          timeCell.innerText = task.time;
          taskCell.innerText = task.task;

          // edit btn
          let editBtn = document.createElement("button");
          editBtn.innerText = "Edit";
          editBtn.classList.add("action-btn", "edit");

          editBtn.addEventListener("click", function () {
            editTask(index);
          });

          //delete btn
          let deleteBtn = document.createElement("button");
          deleteBtn.innerText = "Delete";
          deleteBtn.classList.add("action-btn", "delete");

          deleteBtn.addEventListener("click", function () {
            deleteTask(index);
          });

          // insert edit and delete btn in there cell

          editCell.appendChild(editBtn);
          deleteCell.appendChild(deleteBtn);
        });
      }

      // addTask function

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        let time = document.getElementById("time").value;
        let taskText = document.getElementById("task").value;

        if (time === null || time === "") {
          alert("Enter the time");
          return;
        } else if (task === null || task === "") {
          alert("Enter the task");
          return;
        }

        let taskObj = {
          time: time,
          task: taskText,
        };

        tasks.push(taskObj);
        localStorage.setItem("tasks_wednesday", JSON.stringify(tasks));

        form.reset();

        firstCard.style.display = "none";
        secondCard.style.display = "block";

        // render the UI

        display();
      });

      // delete Task

      function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks_wednesday", JSON.stringify(tasks));

        // render the UI
        display();
      }

      // Edit task

      function editTask(index) {
        let newTime = prompt("Enter new time:", tasks[index].time);
        let newTask = prompt("Enter new task:", tasks[index].task);

        if (newTime === null || newTime === "") {
          alert("Enter the time");
          return;
        } else if (newTask === null || newTask === "") {
          alert("Enter the task");
          return;
        }

        tasks[index] = {
          time: newTime,
          task: newTask,
        };

        localStorage.setItem("tasks_wednesday", JSON.stringify(tasks));
        display();
      }

      // Run on load
      document.addEventListener("DOMContentLoaded", display);
