const reportChart = document.querySelector('.report__chart');
let myChart;

export const clearChart = () => {
    reportChart.textContent = '';
}

export const generateChart = (data) => {
    const incomeData = data.filter(item => item.type === 'income');
    const expensesData = data.filter(item => item.type === 'expenses');

    const chartLabel = [...new Set(data.map(item => item.date))]

    const reduceOperationDate = (arrDate) => 
        chartLabel.reduce((acc, date) => {
            const total = arrDate
            .filter(item => item.date === date)
            .reduce((acc, record) => acc + parseFloat(record.amount), 0);
            acc[0] += total
            acc[1].push(acc[0])
            return [acc[0], acc[1]];
        }, [0, []]);

    const [accIncome, incomeAmounts] = reduceOperationDate(incomeData);
    const [accExpenses, expensesAmounts] = reduceOperationDate(expensesData);

    console.log('accExpenses: ', accExpenses);
    console.log('accIncome: ', accIncome);
    

    const balanceAmounts = incomeAmounts.map((income, i) => income - expensesAmounts[i]);

    const canvasChart = document.createElement('canvas');
    clearChart();
    reportChart.append(canvasChart);

    const ctx = canvasChart.getContext('2d');

    if(myChart instanceof Chart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabel,
            datasets: [
                {
                    label: 'income',
                    data: incomeAmounts,
                    borderWidth: 2,
                    hidden: true
                },
                {
                    label: 'expenses',
                    data: expensesAmounts,
                    borderWidth: 2,
                    hidden: true
                },
                {
                    label: 'balance',
                    data: balanceAmounts,
                    borderWidth: 2,
                    hidden: false
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'financial graph'
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

