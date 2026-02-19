document.getElementById("transfer-btn").addEventListener("click", function() {
    const transferNumber = getValueFromInput("transfer-number");
    if(transferNumber.length != 11) {
        alert("Invalid User Account Number");
        return;
    }

    const transferAmount = getValueFromInput("transfer-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    const transferPin = getValueFromInput("transfer-pin");
    if(transferPin === "1234"){
        alert("Transfer money successfully");
        setBalance(newBalance);

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
            ${transferAmount} Taka Successfully transferred to ${transferNumber}, at ${new Date()} 
        </div>
        `;

        history.append(newHistory);
    } else {
        alert("Invalid pin");
        return;
    }

})