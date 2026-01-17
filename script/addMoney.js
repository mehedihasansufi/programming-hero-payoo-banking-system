document.getElementById("add-money-button").
    addEventListener("click", function (event) {

        event.preventDefault()
        const selectBank = document.getElementById("select-bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin-number").value;
        const amount = document.getElementById("add-amount").value;
        const mainBalance = document.getElementById("main-balance");



        if (selectBank && accountNumber.length > 0 && pin.length >= 3 && amount.length > 0) {

            if (parseInt(accountNumber) === 1053886980001 && parseInt(pin) === 123) {

                // only calculation added here


            } else {
                alert("Invalid Account || Invalid pin")
            }
        } else {
            alert("select a bank || put the account number || put the pin || add amount ")
        }




    })