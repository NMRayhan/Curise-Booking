function priceCalculation(){
    const firstInput = document.getElementById('first-Input').value;
    const firstNumber = parseInt(firstInput);
    const economyInput = document.getElementById('economy-Input').value;
    const economyNumber = parseInt(economyInput);
    
    let subTotal = (firstNumber * 150) + (economyNumber * 100)
    document.getElementById('subtotal').innerText = subTotal;

    let withVat = subTotal * .1;
    document.getElementById('vat').innerText = withVat;

    let total = subTotal + withVat;
    document.getElementById('total').innerText = total;
}

function HandleTicketCounting(ticketClass,isIncrease){
    const input = document.getElementById(ticketClass + '-Input').value;
    const inputNumber = parseInt(input);
    let ticketCount = inputNumber;
    let subTotal = 0;
    if(isIncrease === true){
        ticketCount =  ticketCount + 1;
    }if(isIncrease === false &&  ticketCount > 0){
        ticketCount =  ticketCount - 1;
    }
    document.getElementById(ticketClass + '-Input').value =  ticketCount;
    priceCalculation();
}

// 2nd Level
// function HandleTicketCounting_first(isIncrease){
//     const input = document.getElementById('Input').value;
//     const inputNumber = parseInt(input);
//     var ticketCount = inputNumber;
//     if(isIncrease === true){
//         ticketCount =  ticketCount + 1;
//     }if(isIncrease === false &&  ticketCount > 0){
//         ticketCount =  ticketCount - 1;
//     }
//     document.getElementById('Input').value =  ticketCount;
// }

// function HandleTicketCounting_economy(isIncrease){
//     const input = document.getElementById('economy-Input').value;
//     const inputNumber = parseInt(input);
//     var ticketCount = inputNumber;
//     if(isIncrease === true){
//         ticketCount =  ticketCount + 1;
//     }if(isIncrease === false &&  ticketCount > 0){
//         ticketCount =  ticketCount - 1;
//     }
//     document.getElementById('economy-Input').value =  ticketCount;
// }


