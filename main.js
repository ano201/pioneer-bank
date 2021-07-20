const login = document.getElementById("login-button");
login.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  const transactionArea = document.getElementById("transaction-area");
  loginArea.setAttribute("style", "display : none;");
  transactionArea.setAttribute("style", "display : block")
})


//-----------chaos------


//-----depposit button

const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function() {
  const inputDeposit = toNumber("input-deposit");
  updateAmount("current-deposit", inputDeposit);
  updateAmount("current-ballance", inputDeposit);
})


//------withdraw button

const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function() {
  
  const inputWithdraw = toNumber("input-withdraw");
  updateAmount("current-withdraw", inputWithdraw);
  updateAmount("current-ballance", inputWithdraw*-1)
})


//-----string to number function

function toNumber(id) {
  const input = document.getElementById(id).value;
  const number = parseFloat(input);
  document.getElementById(id).value = "";
  return number;
}



//-----update amount function

function updateAmount(currentAmountId, inputNumber) {
  const currentAmount = document.getElementById(currentAmountId).innerHTML;
  const amountNumber = parseFloat(currentAmount);
  const totalAmount = amountNumber + inputNumber;
  document.getElementById(currentAmountId).innerHTML = totalAmount;
}