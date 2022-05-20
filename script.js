// inputs

const unitInput = document.getElementById('unit-input');
const daysInput = document.getElementById('bp-input');


// buttons

const calcButton = document.getElementById('btn-calculate');


// Results

const subCostInput = document.getElementById('dynamic_sub_cost');
const finalCostInput = document.getElementById('dynamic_total_cost');
const message = document.getElementById('cost_text')


calcButton.addEventListener('click', handleEvent);

function handleEvent() {
    if(Number(unitInput.value) && Number(daysInput.value)) {
        calculateTotalCost()
    } else {
        alert('Give some valid inputs first and try again!');
        
    }

}
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

   
}



   



