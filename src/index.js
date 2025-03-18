document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const taskText = document.getElementById("new-task-description").value;
  if (!taskText.trim()) return; 

  const task = document.createElement("li");
  const deleteButton = document.createElement("button");

  task.textContent = taskText + " ";
  deleteButton.textContent = "X";

  deleteButton.onclick = () => task.remove();

  task.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(task);

  event.target.reset();
});
