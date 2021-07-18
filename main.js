const login = document.getElementById("login-button");
login.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  const transactionArea = document.getElementById("transaction-area");
  loginArea.setAttribute("style", "display : none;");
  transactionArea.setAttribute("style", "display : block")
})