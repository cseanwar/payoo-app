document.getElementById("add-money-btn").addEventListener("click", function () {
  //1 - Get the Bank Account Number
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }
  //2 - get bank account number
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("invalid acc no");
    return;
  }
  //3- get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success to
         ${bankAccount} bank 
         at ${new Date()}`);
    setBalance(newBalance);
    
    //1- history-container ke dhore niye ashbo
    const history = document.getElementById("history-container");
    
    // New div create korbo
    const newHistory= document.createElement("div");

    // New div a innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 rounded-xl">
        Add Money Success to
            ${bankAccount} bank, acc-no. ${accountNumber} at ${new Date()} 
    </div>
    `;

    //4- history container e newDiv append korbo
    history.append(newHistory);
    
  } else {
    alert("Invalid Pin");
    return;
  }
});