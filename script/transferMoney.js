document.getElementById("transfer-money-button")
    .addEventListener("click", function (event) {

        event.preventDefault()

        const userAccountNumber = document.getElementById("transfer-money-account-number").value;

        const transferAmount = document.getElementById("transfer-money-amount").value;
        const pin = document.getElementById("transfer-money-pin-number").value;
        const mainBalance = document.getElementById("main-balance").innerText;



        if (userAccountNumber.length > 0 && pin.length > 0 && transferAmount.length > 0) {
            console.log(userAccountNumber, pin, transferAmount);


            if (userAccountNumber.length === 11) {

                if (parseInt(pin) === 123) {
                    let convertedMainBalance = parseFloat(mainBalance)
                    const convertedTransferAmount = parseFloat(transferAmount)


                    if (convertedMainBalance >= convertedTransferAmount) {
                        convertedMainBalance = convertedMainBalance - convertedTransferAmount
                        document.getElementById("main-balance").innerText = convertedMainBalance
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