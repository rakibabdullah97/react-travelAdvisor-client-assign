import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <>
                <Navbar  collapseOnSelect expand="lg" bg="danger" variant="dark"
                sticky="top">
                    <Container>
                        <Navbar.Brand to="/home">Travel Advisor</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="">
                            <NavLink className="text-decoration-none mx-3 text-light d-block" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none mx-3 text-light d-block" to="/login">Log in </NavLink>
                            {
                                user.email && <NavLink className="text-decoration-none mx-3 text-light d-block" to="/mybooking">My Booking </NavLink>
                            }
                            {
                                user.email && <NavLink className="text-decoration-none mx-3 text-light d-block" to="/managebooking">Manage All Booking </NavLink>
                            }
                            {
                                user.email && <NavLink className="text-decoration-none mx-3 text-light d-block" to="/adddeal">Add New Deal</NavLink>
                            }
                            {user.email && <span
                                style={{ color: 'yellow' }}
                            > {user.displayName}</span>}
                            {
                                user.email && <button onClick={logOut} type="button" class="d-block m-2 btn btn-warning btn-sm ">Log Out</button>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
              
        </div>
    );
};

export default Header;
