


displaySetUp("cash-out-container", "none")
displaySetUp("add-money-container", "none")
displaySetUp("transfer-money-container", "none")
displaySetUp("get-bonus-container", "none")
displaySetUp("pay-bill-container", "block")





// add money display block

document.getElementById("add-money").
  addEventListener("click", function (event) {



    displaySetUp("cash-out-container", "none")
    displaySetUp("transfer-money-container", "none")
    displaySetUp("get-bonus-container", "none")
    displaySetUp("pay-bill-container", "none")
    // mine

    displaySetUp("add-money-container", "block")

  })

// cash out display block

document.getElementById("cash-out").addEventListener("click", function (event) {

  displaySetUp("transfer-money-container", "none")
  displaySetUp("get-bonus-container", "none")
  displaySetUp("pay-bill-container", "none")
  displaySetUp("add-money-container", "none")
  // mine
  displaySetUp("cash-out-container", "block")

})


// transfer money display block

document.getElementById("transfer-money").addEventListener("click", function () {

  displaySetUp("cash-out-container", "none")
  displaySetUp("get-bonus-container", "none")
  displaySetUp("add-money-container", "none")
  displaySetUp("pay-bill-container", "none")
  // mine
  displaySetUp("transfer-money-container", "block")


})



// bouns coupon block

document.getElementById("get-bonus")
  .addEventListener("click", function (event) {


    displaySetUp("cash-out-container", "none")
    displaySetUp("transfer-money-container", "none")
    displaySetUp("pay-bill-container", "none")
    displaySetUp("add-money-container", "none")
    // mine
    displaySetUp("get-bonus-container", "block")


  })


// pay bill option

document.getElementById("pay-bill")
  .addEventListener("click", function (event) {


    displaySetUp("cash-out-container", "none")
    displaySetUp("transfer-money-container", "none")
    displaySetUp("get-bonus-container", "none")
    displaySetUp("add-money-container", "none")
    // mine
    displaySetUp("pay-bill-container", "block")


  })



// transactions