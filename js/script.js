import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
let amount = 0;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const typeOperatiom = e.submitter.dataset.typeOperation;
    const changeAmount = convertStringNumber(financeForm.amount.value);

    if(typeOperatiom === 'income') {
        amount = amount + changeAmount;
    }

    if(typeOperatiom === 'expenses') {
        amount = amount - changeAmount;
    }
});



