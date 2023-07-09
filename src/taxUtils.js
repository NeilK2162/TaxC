// taxUtils.js

function year(assessmentYear, income) {

    let taxableIncome = 0;
    // Perform tax calculation based on the selected assessment year
    if (assessmentYear === '2023-24') {
        // Tax calculation logic for assessment year 2023-24
        if (income <= 250000) {
          taxableIncome = 0;
        } else if (income > 250000 && income <= 500000) {
          taxableIncome = (income - 250000) * 0.05;
        } else if (income > 500000 && income <= 750000) {
          taxableIncome = (income - 500000) * 0.1 + 12500;
        } else if (income > 750000 && income <= 1000000) {
          taxableIncome = (income - 750000) * 0.15 + 37500;
        } else if (income > 1000000 && income <= 1250000) {
          taxableIncome = (income - 1000000) * 0.2 + 75000;
        } else if (income > 1250000 && income <= 1500000) {
          taxableIncome = (income - 1250000) * 0.25 + 125000;
        } else {
          taxableIncome = (income - 1500000) * 0.3 + ((1500000-1250000)*0.25)+((1250000-1000000)*0.2)+((1000000-750000)*0.15)+((750000-500000)*0.1)+((500000-250000)*0.05);
        }
      } else if (assessmentYear === '2022-23') {
        // Tax calculation logic for assessment year 2022-23
        if (income <= 250000) {
            // No tax for income up to Rs. 2,50,000
            taxableIncome = 0;
          } else if (income > 250000 && income <= 500000) {
            // 5% tax on the amount exceeding Rs. 2,50,000
            taxableIncome = (income - 250000) * 0.05;
          } else if (income > 500000 && income <= 750000) {
            // 10% tax on the amount exceeding Rs. 5,00,000 plus fixed tax amount
            taxableIncome = (income - 500000) * 0.1 + 12500;
          } else if (income > 750000 && income <= 1000000) {
            // 15% tax on the amount exceeding Rs. 7,50,000 plus fixed tax amount
            taxableIncome = (income - 750000) * 0.15 + 37500;
          } else if (income > 1000000 && income <= 1250000) {
            // 20% tax on the amount exceeding Rs. 10,00,000 plus fixed tax amount
            taxableIncome = (income - 1000000) * 0.2 + 75000;
          } else if (income > 1250000 && income <= 1500000) {
            // 25% tax on the amount exceeding Rs. 12,50,000 plus fixed tax amount
            taxableIncome = (income - 1250000) * 0.25 + 125000;
          } else if (income > 1500000) {
            // 30% tax on the amount exceeding Rs. 15,00,000 plus fixed tax amount
            taxableIncome = (income - 1500000) * 0.3 + 187500;
          }
      } else if (assessmentYear === '2021-22') {
        // Tax calculation logic for assessment year 2021-22
        if (income <= 250000) {
          taxableIncome = 0;
        } else if (income > 250000 && income <= 500000) {
          taxableIncome = (income - 250000) * 0.05;
        } else if (income > 500000 && income <= 1000000) {
          taxableIncome = (income - 500000) * 0.2 + 12500;
        } else if (income > 1000000) {
          taxableIncome = (income - 1000000) * 0.3 + 112500;
        }
      }

    return taxableIncome;
}




export function calculateTax(assessmentYear, income, taxpayerCategory) {
    let taxAmount = 0;


    // Apply different tax calculation rules based on taxpayer category
    switch (taxpayerCategory) {
        case 'Individual':
            // Tax calculation rules for Individual/HUF/AOPs or BOI category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=  year(assessmentYear, income);
            break;
        case 'HUF':
            // Tax calculation rules for Individual/HUF/AOPs or BOI category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=year(assessmentYear, income);
            break;

        case 'Domestic Company':
            // Tax calculation rules for Domestic Company category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=income*0.3
            break;

        case 'Foreign Company':
            // Tax calculation rules for Foreign Company category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=income*0.4
            break;

        case 'Firms':
            // Tax calculation rules for Firms category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=income*0.3
            break;

        case 'LLP':
            // Tax calculation rules for LLP category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=income*0.3
            break;

        case 'Co-Operative Society':
            // Tax calculation rules for Co-Operative Society category
            // Update the logic based on your specific tax rules
            // Example calculation:
            taxAmount=income*0.15
            break;

        default:
            // Invalid taxpayer category
            console.error('Invalid taxpayer category');
            break;
    }

    return taxAmount;
}








