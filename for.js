
function register() {
  let name = document.getElementById("registerName").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let msg = document.getElementById("registerMsg");

  if (name === "" || email === "" || password === "") {
    msg.innerText = "Please fill all fields";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    msg.innerText = "Invalid email";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let existingUser = users.find(u => u.email === email);

  if (existingUser) {
    msg.innerText = "Email already exists!";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "index.html";
}


function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let msg = document.getElementById("loginMsg");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let foundUser = users.find(u => u.email === email && u.password === password);

  if (!foundUser) {
    msg.innerText = "All inputs is required";
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
  window.location.href = "home.html";
}


function checkLogin() {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  document.getElementById("welcomeMsg").innerText = `Welcome, ${user.name}!`;
}


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
