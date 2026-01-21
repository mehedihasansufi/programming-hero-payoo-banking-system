

document.getElementById("pay-bill-button")
    .addEventListener("click", function (event) {
        event.preventDefault()

        const billOption = returnValueByIdFromInputTag("select-bill-option")
        const billerAccountNumber = returnValueByIdFromInputTag("biller-account-number")
        const amountToPay = returnValueByIdFromInputTag("amount-pay")
        const pin = returnValueByIdFromInputTag("bill-pay-pin-number")

       

        if (billOption && billerAccountNumber.length > 0 && amountToPay.length > 0 && pin.length > 0) {

            if (billerAccountNumber.length == 12) {

                if (parseInt(pin) === 123) {
                    const convetAmountToPay = parseFloat(amountToPay);
                    const mainBalance = returnValueByIdToInnerText("main-balance")
                    const convertedMainBalance = parseFloat(mainBalance)

                    if (convertedMainBalance >= convetAmountToPay) {

                        setInnerTextForMainBalance(convertedMainBalance - convetAmountToPay)
                    } else {
                        alert("Insufficient Balance")
                    }
                } else {
                    alert("invalid pin")
                }


            } else {
                alert("biller account is not valid")
            }
        } else {
            alert("please full fill the all option")
        }

    })