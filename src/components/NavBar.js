import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`

    .navbar-brand, .navbar-nav, .nav-link {
        color:white !important;
        font-size:30px;


        a {
            color:white;
            text-decoration:none;
        }
    }
    
  .navbar-toggle {
      display:none
      }
}
   

`;

export const NavigationBar = () => {


    return (
        <Styles>
            <Navbar expand="lg" style={{backgroundColor: "transparent"}}>
                
                <Navbar className=" ml-auto">
                    <Nav>
                        <Nav.Item><Link className="nav-link" to="/update2021"><i className="fas fa-home"></i></Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" to="/update2021/code_battle">Code Battle</Link></Nav.Item>
                    </Nav>
                </Navbar>
            </Navbar>
        </Styles>
    )
};