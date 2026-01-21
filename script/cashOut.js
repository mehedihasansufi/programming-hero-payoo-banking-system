

document.getElementById("cash-out-button").
    addEventListener("click", function (event) {
        event.preventDefault()


        const agentNumber = returnValueByIdFromInputTag("cash-out-agent-number")
        const withdrawAmount = returnValueByIdFromInputTag("cash-out-withdraw")
        const pin = returnValueByIdFromInputTag("cash-out-pin-number")

        const mainBalance = returnValueByIdToInnerText("main-balance")



        if (agentNumber.length > 0 && withdrawAmount.length > 0 && pin.length > 0) {

            if (parseInt(agentNumber) === 1053886980001 && parseInt(pin) === 123) {

                let convertedMainBalance=parseFloat(mainBalance)
                const converWithdrawAmount=parseFloat(withdrawAmount)

              if(convertedMainBalance>=converWithdrawAmount){
                 convertedMainBalance=convertedMainBalance-converWithdrawAmount
               document.getElementById("main-balance").innerText=convertedMainBalance
              }else{
                alert("Insufficient Balance")
              }
                
            }else{
                alert("please enter valid account number or valid pin number")
            }

        } else {
            alert("please enter all input field")
        }

    })