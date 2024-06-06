import { useState } from "react";
import Computation from "./Component/Computation";
import UserInput from "./Component/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const insertData = (newData) => {
    setData(data.concat(newData));
    calculateMonthlyPayment(newData);
  };

  const calculateMonthlyPayment = ({ loanAmount, interestRate, loanTerm }) => {
    const principal = parseFloat(loanAmount);
    const calculatedInterestRate = parseFloat(interestRate)/100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    const monthlyPayment = (principal*calculatedInterestRate*(Math.pow(1+calculatedInterestRate,numberOfPayments)))/(Math.pow(1+calculatedInterestRate,numberOfPayments)-1);

    setMonthlyPayment(monthlyPayment);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="main row">
        <div className="div__1 col-9 col-sm-9 col-md-9">
          <h1 className="header">Loan App Calculator</h1>
        </div>
        <div className="div__2 col-3 col-sm-3 col-md-3">
          <button className="btn btn-outline-primary mx-2" onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <UserInput LoadData={insertData} />
      <Computation data={data} monthlyPayment={monthlyPayment} />
      <strong>Devloped by @SK. Coder</strong>
    </div>
  );
}

export default App;
