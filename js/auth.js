function authLang() {
  return window.getCurrentLang ? window.getCurrentLang() : (localStorage.getItem("lang") || "lv");
}

function authText(key, fallback) {
  return window.t ? window.t(key, authLang()) : fallback;
}

function setAuthMessage(message, color = "#555") {
  const status = document.getElementById("authStatus");
  if (status) {
    status.textContent = message;
    status.style.color = color;
  }
}

function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    setAuthMessage(authText("auth.status.empty", "Aizpildi visus laukus!"), "#c62828");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    setAuthMessage(authText("auth.status.exists", "Lietotājs jau eksistē!"), "#c62828");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  setAuthMessage(authText("auth.status.registered", "Reģistrācija veiksmīga! Tagad vari ienākt."), "#2e7d32");
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    setAuthMessage(authText("auth.status.bad", "Nepareizi dati!"), "#c62828");
    return;
  }

  localStorage.setItem("currentUser", email);
  setAuthMessage(authText("auth.status.login", "Ienāci sistēmā!"), "#2e7d32");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 400);
}
