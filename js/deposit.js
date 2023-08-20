console.log("js/deposit.js");

document.getElementById("btn-deposit").addEventListener("click", function (e) {
    e.preventDefault();

    const newDepositAmount = getInputFieldValueById("deposit-field");
    if (isNaN(newDepositAmount) || newDepositAmount < 1) {
        alert("Please input a valid number")
    }
    else {
        const previousDepositTotal = getTextElementValueById("deposit-total");
        const newDepositTotal = previousDepositTotal + newDepositAmount;
        setTextElementValueById("deposit-total", newDepositTotal);

        const previousBalanceTotal = getTextElementValueById("balance-total");
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        setTextElementValueById("balance-total", newBalanceTotal);
    }
});