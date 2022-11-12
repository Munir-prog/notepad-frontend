import React, {useContext} from 'react';
import {Context} from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {NOTES_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant={"dark"}>
            <Container>
                <NavLink style={{color: 'white'}} to={NOTES_ROUTE}>
                    <Button variant={"outline-light"}  className="m-2">
                        My notes
                    </Button>
                </NavLink>
                {user.isAuth ?
                    <Nav className={"ml-auto"} style={{color: 'white'}}>
                        <Button variant={"outline-light"} className="m-2">Admin panel</Button>
                        <Button variant={"outline-light"} className="m-2">Log out</Button>
                    </Nav>
                    :
                    <Nav className={"ml-auto"} style={{color: 'white'}}>
                        <Button variant={"outline-light"}  className="m-2" onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;