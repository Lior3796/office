import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { TableContext,TableContextProvider,SetTableContext,SetEmployeesContext,employeesHeaders } from '../../../Context';
import Form from '../Form/Form';
import currectTable from '../Form/Form';
import './Employees.css';

function EmployeesTable() {    
  const Employees = useContext(TableContext);
  const StyledTr = styled.tr`
  td,span{
    margin-right:10px;

  }
  #spanDisplay {
    visibility: hidden;
  } &:hover 
  #spanDisplay {
    visibility: visible;

  }

  `;
  
    return (
        <>
        <table>
            <tr>
               
                   <th>{employeesHeaders[0]}</th>
                   <th>{employeesHeaders[1]}</th>

                {//  employeesHeaders.map((header,index)=>
                
                //       return <th key={index}>{header}</th>
                //    })
}
               

               
            </tr>
            {
                Employees.map((employee, index) => {
                    return <StyledTr>
                    <td id="fullName"><Link to={{pathname:`/privateEmployee/${index}`}}>{employee.firstName}  {employee.lastName}</Link></td>
                    <span >{new Date().getFullYear() - employee.yearOfBirth }</span>
                     <span id="spanDisplay"> {employee.phoneNumber} {employee.email}</span>
                    </StyledTr>
                })
            }
        </table>
        
        
        </>
    );
}

export default EmployeesTable;