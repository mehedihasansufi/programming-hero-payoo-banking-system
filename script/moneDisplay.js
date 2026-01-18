
// document.getElementById("cash-out-container").style.display="none";
document.getElementById("add-money-container").style.display="none"

// add money display block

document.getElementById("add-money").
addEventListener("click",function(event){

    document.getElementById("cash-out-container").style.display="none";
  document.getElementById("add-money-container").style.display="block"

})

// cash out display block

document.getElementById("cash-out").addEventListener("click",function(event){

    document.getElementById("add-money-container").style.display="none"




    document.getElementById("cash-out-container").style.display="block"
})