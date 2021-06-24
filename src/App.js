import logo from './logo.svg';
import './App.css';
import { employeesHeaders, OfficeProvider, EmployeesProvider, EmployeesContext, OfficeContext, SetEmployeesContext } from './Context';
import Header from './Components/Features/Header/Header';
import Footer from './Components/Features/Footer/Footer';

import { useContext, useState } from 'react';

function App() {
const EmployeesArray = SetEmployeesContext();
const [Employees, setEmployees] = useState(EmployeesArray);

  return (
    <OfficeProvider value={Employees}>
      <div className="App">
        <Header/>
        <Footer/>
        
      </div>
    </OfficeProvider>
  );
}

export default App;
