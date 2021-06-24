import React,{useState,useContext} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Employees from '../../Pages/Employees/Employees';
import AppRouter from '../../../AppRouter/AppRouter';
import './Header.css';
import SpecialButton from '../SpecialButton/SpecialButton';

function Header() {
  
    return (
        <Router>
        <nav className="navContainer">
          <ul className="navBarList">
          <SpecialButton className="links" />

              <li><Link className="links" to="/">Home</Link></li>
              <li><Link className="links" to="/ContactUs">Contact us</Link></li>
              <li><Link className="links" to="/Employees">Employees</Link></li>
              <li><Link className="links" to="/PrivateEmployee">PrivateEmployee</Link></li>

          </ul>
        </nav>
        <AppRouter />
      
        </Router>
    );
}

export default Header;