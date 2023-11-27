function addTask() {
    var taskName = document.getElementById("taskName").value;
    var dueDate = document.getElementById("dueDate").value;

    if (taskName && dueDate) {
        var taskList = document.getElementById("tasks");
        var listItem = document.createElement("li");
        listItem.textContent = taskName + " - Due: " + dueDate;
        taskList.appendChild(listItem);

        // Schedule email or push notification (for demonstration purposes)
        scheduleNotification(taskName, new Date(dueDate));
    } else {
        alert("Please enter both task and due date.");
    }
}

function scheduleNotification(taskName, dueDate) {
    // In a real-world scenario, this function would interact with a back-end service
    // to schedule an email or push notification for the given task and due date.

    // For demonstration purposes, this function logs the scheduled notification.
    console.log(`Scheduled notification for task: ${taskName}, due: ${dueDate}`);
    // You would typically call your back-end service here to handle the notification.
    // For example, you might make an AJAX request to a server endpoint.
}
