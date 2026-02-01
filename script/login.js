document.getElementById("log-in-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const accountNumber = returnValueByIdFromInputTag("account-number")
        const pinNumber = returnValueByIdFromInputTag("pin-number")
        

        if(!accountNumber || !pinNumber){
            alert("full fill the account number or pin number")
        }
        if(accountNumber.length===13){
            console.log("valid account")
            if(parseInt(pinNumber)===123){
                window.location.href="./main.html"
                
            }else{
               
                alert("Invalid pin Number")
                
            }
        }else{
            alert("not valid account")
        }
    })
