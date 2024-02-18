// calculate the sales tax 
function calculateTax(amount, taxPercentage) {
    return (amount * (taxPercentage / 100)).toFixed(2);
}

// calculate the tip 
function calculateTip(amount, tipPercentage) {
    return (amount * (tipPercentage / 100)).toFixed(2);
}

// calculate the total amnt incl tip and tax
function calculateTotal(amount, tipAmount, taxAmount) {
    return (amount + parseFloat(tipAmount) + parseFloat(taxAmount)).toFixed(2);
}

// calc button event listen/ uses a dom element
document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);
    const taxPercentage = parseFloat(document.getElementById('tax').value);


    // conditional breaching
    if (isNaN(amount) || isNaN(tipPercentage) || isNaN(taxPercentage)) {
        alert('Please enter valid numbers for amount, tip percentage, and tax percentage.');
        return;
    }

    const tipAmount = calculateTip(amount, tipPercentage);
    const taxAmount = calculateTax(amount, taxPercentage);
    const totalAmount = calculateTotal(amount, tipAmount, taxAmount);

    // custom object 

    const calculationResult = {
        tipAmount: tipAmount,
        taxAmount: taxAmount,
        totalAmount: totalAmount
    };

    // Update the DOM 
    document.getElementById('result').innerHTML = `
        <p>Tip Amount: $${calculationResult.tipAmount}</p>
        <p>Tax Amount: $${calculationResult.taxAmount}</p>
        <p>Total Amount: $${calculationResult.totalAmount}</p>
    `;
});

