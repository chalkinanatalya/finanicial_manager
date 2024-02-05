import { convertStringNumber } from "./convertStringNumber.js";
import {OverlayScrollbars} from "./overlayscrollbars.esm.min.js";
console.log('OverlayScrollbars: ', OverlayScrollbars);

const API_URL = 'http://localhost:3000/api';

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
const financeReport = document.querySelector('.finance__report');
const report = document.querySelector('.report');
const reportOperationList = document.querySelector('.report__operation-list');

let amount = 0;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const typeOperatiom = e.submitter.dataset.typeOperation;
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

    if(typeOperatiom === 'income') {
        amount += changeAmount;
    }

    if(typeOperatiom === 'expenses') {
        amount -=changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()}$`;
});

OverlayScrollbars(report, {})

const getData = async (url) => {
    try {
        const response = await fetch(`${API_URL}${url}`);
        if(!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.err('Error while getting data', error);
        throw error;
    }
}

const closeReport = ({target}) => {
    if(target.closest('.report__close') || (!target.closest('.report') && target !== financeReport)) {
        report.classList.remove('report__open');
        document.removeEventListener('click', closeReport);
    }
}

const openReport = () => {
    report.classList.add('report__open');
    document.addEventListener('click', closeReport);
}

const renderReport = (data) => {
    reportOperationList.textContent = '';
    const reportRows = data.map(operation => {
        const reportRow = document.createElement('tr');
        reportRow.classList.add('report__row');

        reportRow.innerHTML = `
        <tr class="report__row">
        <td class="report__cell">${operation.category}</td>
        <td class="report__cell">${operation.amount}</td>
        <td class="report__cell">${operation.description}</td>
        <td class="report__cell">${operation.date}</td>
        <td class="report__cell">${operation.type}</td>
        <td class="report__action-cell">
          <button class="report__button report__button_table">&#10006;</button>
        </td>
        `

        return reportRow;
    });

    reportOperationList.append(...reportRows);
}

financeReport.addEventListener('click', async () => {
    openReport();
    const data = await getData('/test');
    console.log('data: ', data);

    renderReport(data);
});



