document.getElementById("log-in-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const accountNumber = document.getElementById("account-number").value;
        const pinNumber = document.getElementById("pin-number").value;

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
