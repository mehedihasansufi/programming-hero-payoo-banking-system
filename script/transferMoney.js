document.getElementById("transfer-money-button")
    .addEventListener("click", function (event) {

        event.preventDefault()

        const userAccountNumber = returnValueByIdFromInputTag("transfer-money-account-number")

        const transferAmount = returnValueByIdFromInputTag("transfer-money-amount")

        const pin = returnValueByIdFromInputTag("transfer-money-pin-number")
        const mainBalance = returnValueByIdToInnerText("main-balance")


        if (userAccountNumber.length > 0 && pin.length > 0 && transferAmount.length > 0) {



            if (userAccountNumber.length === 11) {

                if (parseInt(pin) === 123) {
                    let convertedMainBalance = parseFloat(mainBalance)
                    const convertedTransferAmount = parseFloat(transferAmount)


                    if (convertedMainBalance >= convertedTransferAmount) {


                        // set main balance after transfer money

                        setInnerTextForMainBalance(convertedMainBalance - convertedTransferAmount)

                    } else {
                        alert("insufficient Balance")
                    }

                } else {
                    alert("please enter the the valid pin number")
                }
            } else {
                alert("please Enter the valid user account number")
            }


        } else {
            alert("pleae ful-fill the all input element")
        }



    })