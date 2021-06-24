import { createContext,useState,useContext} from "react";

const images = ["https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]

const employeesArray = [
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:1},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:2},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:3},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:4},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:5},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:6},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:7},
    {firstName:"lior",lastName:"solomon",yearOfBirth:1996,phoneNumber:"0549303109",email:"Liorlsa9@gmail.com",id:8}
    ];


export const EmployeesContext = createContext(employeesArray);
export const EmployeesProvider = EmployeesContext.Provider;

//שם מלא, גיל, טלפון ואימייל.
export const employeesHeaders = ["Full Name","Age"];

export const OfficeContext = createContext(images);
export const OfficeProvider = OfficeContext.Provider;

export function SetOfficeContext() {
  return useContext(OfficeContext);
}

export const ImagesContext = createContext(images);
export const ImagesProvider = ImagesContext.Provider;

export function SetImagesContext() {
  return useContext(ImagesContext);
}

export function SetEmployeesContext() {
    return useContext(EmployeesContext);
  }

 export const TableContext = createContext(employeesArray);
 export const TableContextProvider = TableContext.Provider;

 export function SetTableContext() {
  return useContext(TableContext);
}
