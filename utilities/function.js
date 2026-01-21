function displaySetUp(container, displayProperty) {
    document.getElementById(container).style.display = displayProperty;
}



function returnValueByIdFromInputTag(id) {

    const value = document.getElementById(id).value;
    return value
}




function returnValueByIdToInnerText(id) {
    return document.getElementById(id).innerText;
}


function setInnerTextForMainBalance(balance) {
    document.getElementById("main-balance").innerText = balance
}