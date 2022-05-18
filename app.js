// inputs

const unitInput = document.getElementById('unit-input');
const daysInput = document.getElementById('bp-input');
//const vatInput = document.getElementById('vat-input');

// buttons

const successButton = document.getElementById('btn-calculate');
//const resetButton = document.getElementById('btn-reset');

// Results

const subCostInput = document.getElementById('dynamic_sub_cost');
const finalCostInput = document.getElementById('dynamic_total_cost');
const message = document.getElementById('cost_text')

function calculateTotalCost() {

    let unit, days, unitcost, daycost, vat, subTotal, total;

    unit = Number(unitInput.value);
    days = Number(daysInput.value);
	unitcost = 0.2;
	daycost = 0.04;
    vat  = 13.5;

    subTotal = unit * unitcost + days * daycost;

    total = subTotal + (subTotal * vat) / 100;
	
	subCostInput.textContent = subTotal.toFixed(2)
    
    finalCostInput.textContent = total.toFixed(2)

    let msg = showMessage(total);

    message.textContent = msg

}



function showMessage(cost) {
    if (cost < 100) {
        return "Cost is Cheap";
    } else if (cost >= 100 && cost < 500) {
        return "Cost is medium";
    }else if (cost >= 500 && cost < 1000) {
        return "Cost is high";
    } else if (cost >= 1000 && cost <= 5000) {
        return "Cost is expensive";
    } else {
        return "cost is super expensive";
    }
}


//function reset() {
//    unitInput.value = ""
//    daysInput.value = ""
    //vatInput.value = ""
 //   finalCostInput.textContent = "_____________________"
 //   message.textContent = ""
//}




function handleEvent() {
    if(Number(unitInput.value) && Number(daysInput.value)) {
        calculateTotalCost()
    } else {
        alert('Give some valid inputs first and try again!');
        //reset()
    }

}


successButton.addEventListener('click', handleEvent);
//resetButton.addEventListener('click', reset)