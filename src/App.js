import React, { useState } from 'react';
import './App.css';
import { calculateTax } from './taxUtils';

function App() {
  const [income, setIncome] = useState('');
  const [tax1, setTax] = useState('');
  const [assessmentYear, setAssessmentYear] = useState('');
  const [surcharge, setSurcharge] = useState(0);
  const [educationCess, setEducationCess] = useState(0);
  const [totalTaxLiability, setTotalTaxLiability] = useState(0);
  const [taxpayerCategory, setTaxpayerCategory] = useState('');

  const calculateTaxAmount = () => {
    const tax = calculateTax(assessmentYear, income, taxpayerCategory);

    // Perform additional tax-related calculations here
    
 
    const revenue = calculateIncomeAmount(income);
    setIncome(formatValueWithCommas(revenue));

    const taxinc = calculateIncomeAmount(tax);
    setTax(formatValueWithCommas(taxinc));


    const surchargeAmount = calculateSurcharge(tax);
    setSurcharge(surchargeAmount);

    const cessAmount = calculateCess(tax+surchargeAmount);
    setEducationCess(cessAmount);
  

    const totalTax = tax + surchargeAmount + cessAmount;
    setTotalTaxLiability(totalTax);
  };

  const calculateIncomeAmount = (income) => {
    // Calculate the relief amount based on income and assessment year rules
    // Add your logic here to calculate the relief amount
    return income;
  };

  const handleTaxpayerCategoryChange = (e) => {
    setTaxpayerCategory(e.target.value);
  };
  
  const calculateSurcharge = (tax) => {
    if(taxpayerCategory==='Co-Operative Society') 
      return tax*0.1;
    
    if(taxpayerCategory==='Individual')
    {
        if(tax>=1237500 && tax <= 2737500)
          return tax*0.1;
        
        if(tax>=2737500 && tax <= 5737500)
          return tax*0.15;

        if(tax>=5737500 && tax <= 14737500)
          return tax*0.25;
       
        if(tax>14737500)
          return tax*0.37;    

    }
    if(taxpayerCategory==='Domestic Company')
    {
        if(tax <= 3000000)
          return 0;
        
        if(tax>=3000000 && tax <= 30000000)
          return tax*0.07;

        if(tax>=30000000)
          return tax*0.12;
          
    }
    
    return 0; 
  };

  const calculateCess = (tax) => {
    
    return 0.04*tax;
  };

  const handleAssessmentYearChange = (e) => {
    setAssessmentYear(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateTaxAmount();
    }
  };
  
  const handleIncomeChange = (e) => {
    const formattedIncome = e.target.value.replace(/,/g, '');
    setIncome(formattedIncome);
  };

  const formatValueWithCommas = (value) => {
    return value.toLocaleString('en-IN');
  };

  return (
    <div className="App">
      
      
      <div className="container">
      
      <div className="icon-container">
  <img src={process.env.PUBLIC_URL + '/diagram.png'} alt="Icon" /></div>
        <header className="App-header">
          <h1>Tax Calculator</h1>
          <div className="input-container">
            
            <label htmlFor="taxpayer-category-select">Taxpayer Category:</label>
            <select
              id="taxpayer-category-select"
              value={taxpayerCategory}
              onChange={handleTaxpayerCategoryChange}
            >
              <option value="">Category</option>
              <option value="Individual">Individual</option>
              <option value="HUF">HUF</option>
              <option value="Domestic Company">Domestic Company</option>
              <option value="Foreign Company">Foreign Company</option>
              <option value="Firms">Firms</option>
              <option value="LLP">LLP</option>
              <option value="Co-Operative Society">Co-Operative Society</option>
              {/* Add more taxpayer category options as needed */}
            </select>
          </div>
          <div className="input-container">
            
            <label htmlFor="income-input">Income:</label>
            <input
              id="income-input"
              type="text"
              placeholder="Income in Rupees"
              value={formatValueWithCommas(income)}
              onChange={handleIncomeChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="input-container">
            <label htmlFor="assessment-year-select">Assessment Year:</label>
            <select
              id="assessment-year-select"
              value={assessmentYear}
              onChange={handleAssessmentYearChange}
            >
              <option value="">Year</option>
              <option value="2023-24">2023-24</option>
              <option value="2022-23">2022-23</option>
              <option value="2021-22">2021-22</option>
              {/* Add more assessment year options as needed */}
            </select>
          </div>
          <button onClick={calculateTaxAmount}>Calculate</button>
          <div className="result-container">
            <p>
              <span>Total Income:</span>
              <strong>{formatValueWithCommas(income)}</strong>
            </p>
            <p>
              <span>Income Tax after relief u/s 87A:</span>
              <strong>{formatValueWithCommas(tax1)}</strong>
            </p>
            <p>
              <span>(opting for taxation under Section 115BAC)</span>
              
            </p>
            <p>
              <span>Surcharge:</span>
              <strong>{formatValueWithCommas(surcharge)}</strong>
            </p>
            <p>
              <span>Health and Education Cess:</span>
              <strong>{formatValueWithCommas(educationCess)}</strong>
            </p>
            <p>
              <span>Total Tax Liability:</span>
              <strong>{formatValueWithCommas(totalTaxLiability)}</strong>
            </p>
          </div>
          <h9>Note : Any data presented here is for experimental purposes. To get correct information about taxes visit <a href="https://www.incometax.gov.in/iec/foportal/">Here</a></h9>
        </header>
        
      </div>
      </div>
    
    
    );
  }
  
  export default App;