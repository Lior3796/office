import React from 'react';
import EmployeesTable from '../../Features/EmployeesTable/EmployeesTable';
import Form from '../../Features/Form/Form';
import SpecialTable from '../../Features/SpecialTable/SpecialTable';
function Employees() {
    const isTableEmployee = true;
    return (
        <>
           <Form isTableEmployee={isTableEmployee} /> 
           {/* <SpecialTable /> */}
        </>
    );
}

export default Employees;