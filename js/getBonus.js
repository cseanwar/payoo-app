document.getElementById("get-bonus-btn").addEventListener("click", function () {
    const bonus = getValueFromInput("get-bonus-amount");
    const currentBalance = getBalance();
    const bonus10 = 1000;
    const bonus20 = 2000;
    const bonus50 = 5000;
    let newBalance = 0;
    if(bonus == "bonus10") {
        newBalance = currentBalance + bonus10;
        setBalance(newBalance);
        alert(`Successfully added ${bonus10} bonus with the balance`);
        //1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");
    
        // New div create korbo
        const newHistory= document.createElement("div");

        // New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
             Bonus ${bonus10} successfully added
                with the ${currentBalance} at ${new Date()}. 
                Your new balance is now ${newBalance}. 
        </div>
        `;

        //4- history container e newDiv append korbo
        history.append(newHistory);

    }else if (bonus == "bonus20") {
        newBalance = currentBalance + bonus20;
        setBalance(newBalance);
        alert(`Successfully added ${bonus20} bonus with the balance`);
        //1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");
    
        // New div create korbo
        const newHistory= document.createElement("div");

        // New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
             Bonus ${bonus20} successfully added
                with the ${currentBalance} at ${new Date()}. 
                Your new balance is now ${newBalance}. 
        </div>
        `;

        //4- history container e newDiv append korbo
        history.append(newHistory);
    }else if (bonus == "bonus50") {
        newBalance = currentBalance + bonus50;
        setBalance(newBalance);
        alert(`Successfully added ${bonus50} bonus with the balance`);
        //1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");
    
        // New div create korbo
        const newHistory= document.createElement("div");

        // New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
             Bonus ${bonus50} successfully added
                with the ${currentBalance} at ${new Date()}. 
                Your new balance is now ${newBalance}. 
        </div>
        `;

        //4- history container e newDiv append korbo
        history.append(newHistory);
    }else {
        alert("Invalid code");
        return;
    }
})