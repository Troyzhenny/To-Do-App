const taskInputBox = document.getElementById("task-input-box");
let taskOnCard = document.getElementById("task-inner-card");
let taskCard = document.getElementById("task-card");
const deleteBtn = document.getElementById("fa-xmark");
const checkIcon = document.getElementById("circle-check");
const checkBox = document.getElementById("empty-checkbox");
const addTask = document.getElementById("add-btn");
const errorMsg = document.getElementById("err-msg");


inputValidation = () => {
    if (taskInputBox.value === "") {
        console.log("☹️ [Error] Please enter a task!");
        errorMsg.innerHTML = "☹️ [Error] Please enter a task!";
    } else {
        console.log("Success");
        errorMsg.style.display = "none";
    }
};

sendTask = () => {
    if (taskInputBox.value === "") {
        console.log("Didn't send");
    } else {
        console.log("Sent");
        taskCard.style.display = "flex";
        checkIcon.style.display = "none";
        //New Task
        taskOnCard.innerHTML = taskInputBox.value;
    }
};

// ______________Buttons_________________ //
addTask.onclick = () => {
    inputValidation();
    sendTask();
};

checkBox.onclick = () => {
    if (checkIcon.style.display === "none"){
        console.log("task completed");
        checkIcon.style.display = "block";
    } else if (checkIcon.style.display === "block") {
        console.log("task retracted");
        checkIcon.style.display = "none";
    } else {
        checkIcon.style.display = "none";
    }
};

deleteBtn.onclick = () => {
    if (deleteBtn.style.display === "none"){
        deleteBtn.style.display = "block";
    } else {
        taskCard.style.display = "none"
    }
};