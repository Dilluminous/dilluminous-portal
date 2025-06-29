const employee = {
  name: "Dielle Robertson",
  position: "Sales Manager"
};

window.onload = function() {
  document.getElementById('employeeName').textContent = employee.name;
  document.getElementById('employeePosition').textContent = employee.position;
};

function goToTaskPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('taskPage').style.display = 'block';
}

document.getElementById('projectForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const project = document.getElementById('projectName').value;
  const task = document.getElementById('taskDetails').value;

  console.log("Task saved:", { employee, project, task });

  alert(`Task for project "${project}" submitted!`);
  this.reset();
});

document.getElementById('markupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const cost = parseFloat(document.getElementById('cost').value);
  const markup = parseFloat(document.getElementById('markup').value);
  const quote = cost + (cost * (markup / 100));
  document.getElementById('quoteResult').textContent = `Quote Price: GHS ${quote.toFixed(2)}`;
});
