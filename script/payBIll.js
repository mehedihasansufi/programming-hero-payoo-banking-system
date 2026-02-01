document.getElementById("pay-bill-button")
.addEventListener("click", function (event){

    event.preventDefault();
   const billOption=returnValueByIdFromInputTag("select-bill-option")
   const billerAccountNumber=returnValueByIdFromInputTag("biller-account-number")
   const billAmount=returnValueByIdFromInputTag("bill-amount-pay")
   const pin=returnValueByIdFromInputTag("bill-pay-pin-number")
   const mainBalance=returnValueByIdToInnerText("main-balance")
  
   if(billOption.length>0 && billAmount.length>0 && billerAccountNumber.length>0 && pin.length>0){

   if(billerAccountNumber.length===13){

    if(parseInt(pin)===123){


        let convertedMainBalance=parseFloat(mainBalance)
        const convertedAddAmount=parseFloat(billAmount)

     


        if(convertedMainBalance>=convertedAddAmount){

             // set main balance after paying bill
            setInnerTextForMainBalance(convertedMainBalance-convertedAddAmount)

         // transaction history

         transactionsHistoryAdd(`${billOption}`,convertedAddAmount)
        }else{
            alert("insufficient balance ")
        }
        

    }else{
        alert("invalid pin ")
    }

   }else{

    alert("biller account invalid")

   }

   }else{
    alert("select bill option || put the account number || put the pin || bill amount")
   }
   
   
   

})