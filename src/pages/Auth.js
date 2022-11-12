import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
            console.log(response);
        }
    }

    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                    style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className={"mt-3"}
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder={"Type your email..."}/>
                    <Form.Control className={"mt-3"}
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  type="password"
                                  placeholder={"Type your password..."}/>
                    <Container className={"p-0 d-flex justify-content-between mt-3"}>
                        {isLogin
                            ?
                            <Container className={"p-0"}>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </Container>
                            :
                            <Container className={"p-0"}>
                                Have account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                            </Container>
                        }
                        <Container className={"p-0 d-flex justify-content-end"}>
                            <Button onClick={click} variant={"outline-success"}>{isLogin ? 'Log in' : 'Register'}</Button>
                        </Container>
                    </Container>
                </Form>


            </Card>
        </Container>
    );
};

export default Auth;