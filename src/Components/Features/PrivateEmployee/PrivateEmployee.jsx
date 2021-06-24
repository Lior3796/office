import React from 'react';
import { useParams } from 'react-router';
import { useState,useContext } from 'react';
import { SetTableContext } from '../../../Context';
function PrivateEmployee() {
    const employeeTable = SetTableContext();
    const {index} = useParams();
    const EmpployeeInfo = employeeTable[index];
    return (
        <div>
            <h1>{EmpployeeInfo.firstName}</h1>
            <h1>{EmpployeeInfo.lastName}</h1>
            <h1>{EmpployeeInfo.email}</h1>
            <h1>{EmpployeeInfo.yearOfBirth}</h1>
            <h1>{EmpployeeInfo.phoneNumber}</h1>
        </div>
    );
}

export default PrivateEmployee;