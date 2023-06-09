import React from 'react';
import styled from'styled-components';
import { NavLink } from'react-router-dom';
import Nav from './Nav';


const Header = () => {
    return (
      <MainHeader>
        <NavLink to="/">
          <div className='logo-img'> 
          <img src="./images/Logo_SOLACE.png"  width="120px" height="100px" alt="my logo img" />  
          </div>  
        </NavLink>
        <Nav />
      </MainHeader>
    );
  };
  
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: #FCE698;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: auto;
    .logo {
      height: 50rem;
    }
    .logo-img {
      width: auto;
    }



  `;
  export default Header;