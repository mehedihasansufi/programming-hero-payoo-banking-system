

document.getElementById("cash-out-button").
    addEventListener("click", function (event) {
        event.preventDefault()
        const agentNumber = document.getElementById("cash-out-agent-number").value;
        const withdrawAmount = document.getElementById("cash-out-withdraw").value;
        const pin = document.getElementById("cash-out-pin-number").value;
        const mainBalance = document.getElementById("main-balance").innerText;

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
                // console.log(typeof agentNumber, typeof withdrawAmount, typeof pin, typeof mainBalance)
            }else{
                alert("please enter valid account number or valid pin number")
            }

        } else {
            alert("please enter all input field")
        }

    })