function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Default users
  if (users.length === 0) {
    users = [
      { username: "admin", password: "admin123", name: "Admin", role: "admin" },
      { username: "john", password: "pass123", name: "John Mensah", role: "employee" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  const match = users.find(user => user.username === u && user.password === p);

  if (match) {
    localStorage.setItem("currentUser", JSON.stringify(match));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid username or password";
  }
}
