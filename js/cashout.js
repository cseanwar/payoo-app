document.getElementById("cashout-btn").addEventListener("click", function() {
    //1- get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return
    }
    
    //2- get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");
    
    const currentBalance = getBalance();
    //4- Calculate the balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    //5- Get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        //5-1 true:: show an alert > set balance
        alert("Cashout Successful");
        console.log(newBalance);
        setBalance(newBalance);
        
        //1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");
    
        // New div create korbo
         const newHistory= document.createElement("div");

        // New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
            ${cashoutAmount} Taka Successfully cashout to ${cashoutNumber}, at ${new Date()} 
        </div>
        `;

        //4- history container e newDiv append korbo
        history.append(newHistory);
        
    } else {
        //5-2 true:: show an error alert > return
        alert("Invalid pin");
        return
    }

});




// document.getElementById("cashout-btn").addEventListener("click", function() {
//     //1- get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber); 
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }

//     //2- get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     //3- get the current balance, validate and convert to number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4- Calculate the balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log("New Balance is: ", newBalance);

//     //5- Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin === "1234") {
//         //5-1 true:: show an alert > set balance
//         alert("Cashout Successful");
//         console.log(newBalance);
//         balanceElement.innerText = newBalance;
//     } else {
//         //5-2 true:: show an error alert > return
//         alert("Invalid pin");
//         return
//     }
// })