function calculateProgressiveTax(income) {
    // Example calculation
    let progressiveTax = income * 0.2;  // Replace with actual tax calculation logic

    return progressiveTax;
}

// Example usage
let income = 50000;
let taxToPay = calculateProgressiveTax(income);
console.log(`Progressive tax for income $${income} is $${taxToPay.toFixed(2)}`);
