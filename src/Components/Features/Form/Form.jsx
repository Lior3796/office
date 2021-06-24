import React, { useState, useContext } from 'react';
import { TableContextProvider, TableContext, SetEmployeesContext } from '../../../Context';
import EmployeesTable from '../EmployeesTable/EmployeesTable';
import './Form.css';
function Form({ isTableEmployee }) {
  const Employees = useContext(TableContext);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [yearOfBirth, setyearOfBirth] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [EmployeesState, setEmployeesState] = useState(Employees);

  function addNewEmployee(e) {
    
    setEmployeesState((pre) => [...pre, {
      firstName: firstName,
      lastName: lastName,
      yearOfBirth: yearOfBirth,
      phoneNumber: phoneNumber,
      email: email
    }]);
  }

  function sendDetails() {
  
  }
  return (
    <div className="formContainer">
      <TableContextProvider value={EmployeesState}>
        
        <form  action="">
          <label htmlFor="">First-Name</label>
          <input onChange={(e) => { setfirstName(e.target.value) }} type="text" />
          <label htmlFor="">Last-Name</label>
          <input onChange={(e) => { setlastName(e.target.value) }} type="text" />
          <label htmlFor="">yearOfBirth</label>
          <input onChange={(e) => { setyearOfBirth(e.target.value) }} type="text" />
          <label htmlFor="">phoneNumber</label>
          <input onChange={(e) => { setphoneNumber(e.target.value) }} type="text" />
          <label htmlFor="">email</label>
          <input onChange={(e) => { setemail(e.target.value) }} type="text" />

          {
            isTableEmployee ? <button  id="formButton" onClick={(e) => { addNewEmployee(e) }}> ADD EMPLOYEE </button>
              : <button  id="formButton" onClick={() => sendDetails()}><a href={`mailto:${email}?subject=heyMan!&body=Hello.`}>SEND Details</a></button>
              
          }


        </form>

        {
          isTableEmployee ? <EmployeesTable /> : <></>
        }
      </TableContextProvider>
    </div>
  );
}

export default Form;