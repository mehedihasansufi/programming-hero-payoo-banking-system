document.getElementById("add-money-button").
    addEventListener("click", function (event) {

        event.preventDefault()

        
        const selectBank = returnValueByIdFromInputTag("select-bank")
        const accountNumber = returnValueByIdFromInputTag("account-number")
        const pin = returnValueByIdFromInputTag("pin-number")
        const amount = returnValueByIdFromInputTag("add-amount")

        
        const mainBalance = returnValueByIdToInnerText("main-balance")


        if (selectBank && accountNumber.length > 0 && pin.length >= 3 && amount.length > 0) {

            if (parseInt(accountNumber) === 1053886980001 && parseInt(pin) === 123) {

                let convertedMainBalance = parseFloat(mainBalance)
                const convertedAddAmount = parseFloat(amount)
                convertedMainBalance = convertedMainBalance + convertedAddAmount
                document.getElementById("main-balance").innerText=convertedMainBalance

            } else {
                alert("Invalid Account || Invalid pin")
            }
        } else {
            alert("select a bank || put the account number || put the pin || add amount ")
        }




    })