

document.getElementById("cash-out-button").
    addEventListener("click", function (event) {
        event.preventDefault()


        const agentNumber = returnValueByIdFromInputTag("cash-out-agent-number")
        const withdrawAmount = returnValueByIdFromInputTag("cash-out-withdraw")
        const pin = returnValueByIdFromInputTag("cash-out-pin-number")

        const mainBalance = returnValueByIdToInnerText("main-balance")



        if (agentNumber.length > 0 && withdrawAmount.length > 0 && pin.length > 0) {

            if (agentNumber.length===11 && parseInt(pin) === 123) {

                let convertedMainBalance = parseFloat(mainBalance)
                const converWithdrawAmount = parseFloat(withdrawAmount)

                if (convertedMainBalance >= converWithdrawAmount) {


                    // set main balance after cash-out money

                    setInnerTextForMainBalance(convertedMainBalance - converWithdrawAmount)
                } else {
                    alert("Insufficient Balance")
                }

            } else {
                alert("please enter valid account number or valid pin number")
            }

        } else {
            alert("please enter all input field")
        }

    })