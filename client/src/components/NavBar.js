import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, login, register } from "../actions/userActions";

import { Button, NavDropdown, Nav, Navbar, Form, Modal, FormControl } from 'react-bootstrap'
import './Screen.css'
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';



function NavBar({ setSearch }) {

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loding, error , userInfo } = userLogin;
   
    const logoutHandler = () => {
        dispatch(logout());
    };

    

    return (

        <div className='container p-2'>
            <Navbar className='border-0 bg-light ' fixed="top" expand="lg">

                <Navbar.Brand className='text-dark' href="/">Mentor On Demand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto mx-0 px-0" />
                <Navbar.Collapse id="basic-navbar-nav" className=" bg-light mr-auto">
                    <Nav className="ml-auto">

                        {userInfo && userInfo.role !== 'Admin' && (
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Form>
                        )}

                        <Link className='text-dark m-3' to="/"><strong>HOME</strong></Link>
                        {userInfo && userInfo.role === "Mentor" && (
                            <div className='mt-3'>
                                <Link className="links text-dark m-3" to="/unpublished">
                                    <strong>MYCART</strong>
                                </Link>
                                <Link className="links text-dark m-3" to="/published">
                                    <strong>PUBLISHED</strong>
                                </Link></div>
                        )}
                        {userInfo && userInfo.role === "User" && (

                            <div className='mt-3'>
                                <Link className="text-dark links m-3" to="/enrolled">
                                    <strong>MYCOURSES</strong>
                                </Link>
                                <Link className="text-dark links m-3" to="/mentorlist">
                                    <strong>MENTORS</strong>
                                </Link>
                                <Link className="text-dark links m-3" to="/viewcourse">
                                    <strong>COURSES</strong>
                                </Link></div>
                        )}
                        <Link className='text-dark m-3' to="/about"><strong>ABOUT</strong></Link>
                        <Link className='text-dark m-3' to="/contact"><strong>CONTACT</strong></Link>

                        {!userInfo &&
                            <div>
                                <Link className='text-dark m-3' to="/register" type="button"><strong>REGISTER</strong></Link>
                                <Link className='text-dark m-3' to="/login" type="button"><strong>LOGIN</strong></Link>

                            </div>}
                        {userInfo &&
                            <NavDropdown
                                className='m-2 text-uppercase text-dark font-weight-bold'
                                title={`${userInfo.name}`}
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item className='m-2 text-dark font-weight-bold' href="/profile">PROFILE
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='m-2 text-dark font-weight-bold' onClick={logoutHandler}>LOGOUT
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                {userInfo && userInfo.role === "Admin" && (
                                <NavDropdown.Item className='m-2 text-dark font-weight-bold' href="/admindashboard">DASHBOARD
                                </NavDropdown.Item>)}
                            </NavDropdown>
                        }


                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </div>
    )
}

export default NavBar
