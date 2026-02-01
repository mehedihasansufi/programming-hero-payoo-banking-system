function displaySetUp(container, displayProperty) {
    document.getElementById(container).style.display = displayProperty;
}



function returnValueByIdFromInputTag(id) {

    const value = document.getElementById(id).value;
    return value
}


function transactionsHistoryAdd(heading, money) {

    const container = document.getElementById("transaction-card-container")
    const card = document.createElement("div")
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    card.innerHTML =/*html*/

        `
        <div class="flex me-card  shadow-lg py-3 px-4 rounded-xl bg-white justify-between items-center">

          <div class="flex gap-3">
            
          <div class="bg-slate-100 flex items-center w-12 h-12 rounded-full justify-center">
            <img src="./assets/wallet1.png" alt="">
          </div>

          <div class="flex flex-col ">
            <h3 class="font-semibold">${heading}</h3>
            <p class="text-slate-500">${time}</p>
          </div>
          </div>

          <h3 class="font-semibold"><span class="font-semibold">${money}</span> tk</h3>
        </div>`

    container.appendChild(card)


}

function returnValueByIdToInnerText(id) {
    return document.getElementById(id).innerText;
}


function setInnerTextForMainBalance(balance) {
    document.getElementById("main-balance").innerText = balance
}