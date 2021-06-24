import React from 'react';
import styled from 'styled-components'
import './Footer.css';
import SpecialForm from '../SpecialForm/SpecialForm';

function Footer({isDark}) {

   const DarkTheme =  isDark == true?
   styled.footer`
   background:black;
   color:white;
   font-size:40px;
   width:100%;
   height:100%
   `:
   styled.footer
   `background:yellow;
   color:red;
   font-size:40px;
   width:100%;
   height:100%
   `   
    return (
        <footer>
            <ul className="footerList">
                <li className="footerList">GitHub</li>
                <li className="footerList">GitHub</li>
                <li className="footerList">GitHub</li>
                <li className="footerList">facebook</li>
            </ul>
        </footer>
   
    );
}

export default Footer;