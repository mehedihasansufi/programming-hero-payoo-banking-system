document.getElementById("bouns-button").addEventListener("click",function (event){
    event.preventDefault()

    const coupon=returnValueByIdFromInputTag("coupon-input-box")
    console.log(typeof coupon);

    if(coupon.length>0){

        if(coupon==="mehedi205324"){
            const mainBalance=parseFloat(returnValueByIdToInnerText("main-balance"))


            // set main balance after useing coupon 
            setInnerTextForMainBalance(mainBalance-100)
        }
    }else{
        alert("please fill up the cupon")
    }
    
})