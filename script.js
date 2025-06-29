const users = [
  { username: "admin", password: "admin123", name: "Admin User", role: "admin" },
  { username: "john", password: "pass123", name: "John Mensah", role: "employee" },
  { username: "ama", password: "ghana2024", name: "Ama Serwaa", role: "employee" }
];

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const match = users.find(user => user.username === u && user.password === p);

  if (match) {
    localStorage.setItem("currentUser", JSON.stringify(match));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid credentials!";
  }
}
