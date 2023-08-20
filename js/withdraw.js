console.log("js/withdraw.js");

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
    e.preventDefault();

    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 1) {
        alert("Please input a valid number");
    }
    else {
        const previousBalanceTotal = getTextElementValueById("balance-total");
        if (newWithdrawAmount > previousBalanceTotal) {
            alert("you don't have enought money.")
        }
        else {
            const previousWithdrawTotal = getTextElementValueById("withdraw-total");
            const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
            setTextElementValueById("withdraw-total", newWithdrawTotal);


            const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
            setTextElementValueById("balance-total", newBalanceTotal)
        }
    }

});