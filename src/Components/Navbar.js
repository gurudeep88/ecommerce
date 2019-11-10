import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logos from '../logos.jpeg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*
                landline image
                 */}
                 <Link to='/'>
                     <img src={logos} alt="store" className="navbar-brand" 
                     style={{width:"70px", borderRadius: "50%"}}/>
                 </Link>
                 <ul className="navbar-nav align-item-center">
                     <li className="nav-item ml-5">
                         <Link to='/' className="nav-link">Products</Link>
                     </li>
                     <li className="nav-item ml-5">
                         <Link to='/his' className="nav-link">His</Link>
                     </li>
                     <li className="nav-item ml-5">
                         <Link to='/hers' className="nav-link">Hers</Link>
                     </li>
                     <li className="nav-item ml-5">
                         <Link to='/aboutus' className="nav-link">About Us</Link>
                     </li>

                 </ul> 
                 <Link to='/cart' className="ml-auto">
                     <ButtonContainer>
                        <span className="mr-2">
                         <i className="fas fa-cart-plus" />
                         </span>
                         My Cart
                         
                     </ButtonContainer>

                 </Link>


            </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
}
`;


export default Navbar;