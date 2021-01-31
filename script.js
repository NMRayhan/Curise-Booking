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

document.getElementById('printDetails').style.display = 'none'
document.getElementById('full-body').style.display = 'block';
document.getElementById('body').style.background = 'block';

document.getElementById('bookingBtn').addEventListener("click", function(){
    confirm("Are You Confirm This Purchase")
    document.getElementById('full-body').style.display = 'none';
    document.getElementById('body').style.background = 'none';
    document.getElementById('printDetails').style.display = 'block'

    // firstClassPassenger 
    const firstClassPassenger = document.getElementById('first-Input').value;
    document.getElementById('firstClassPassenger').innerText = firstClassPassenger

    // economyClassPassenger
    const economyClassPassenger = document.getElementById('economy-Input').value;
    document.getElementById('economyClassPassenger').innerText = economyClassPassenger

    //subTotal Value Set
    const subtotal = document.getElementById('subtotal').innerText
    document.getElementById('tableSubTotal').innerText = subtotal;

    //table Vat set
    const vat = document.getElementById('vat').innerText;
    document.getElementById('tableVat').innerText = vat;

    // table Total set
    const total = document.getElementById('total').innerText;
    document.getElementById('tableTotal').innerText = total;
})


