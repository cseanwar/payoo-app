document.getElementById("bill-pay-btn").addEventListener("click", function() {
    const bank = getValueFromInput("pay-bill-bank");
    if(bank == "Select a Bank") {
        alert("Please select a bank");
        return;
    } 

    const accountNumber = getValueFromInput("pay-bill-number");
    if(accountNumber.length != 11) {
        alert("Invalid account number");
        return;
    }

    const amount = getValueFromInput("bill-pay-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);
    if(newBalance < 0) {
        alert("Oops! You don't have sufficient balance to pay the bill");
        return;
    }

    const pin = getValueFromInput("bill-pay-pin");
    if(pin == "1234") {
        alert(`Successfully paid the bill to ${bank} bank at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
            Successfully paid the bill to
                ${bank} bank, acc-no. ${accountNumber} at ${new Date()} 
        </div>
        `;
        history.append(newHistory);
    } else {
        alert("Invalid pin");
        return;
    }
});