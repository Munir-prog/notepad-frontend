import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, NOTES_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const location = useLocation();
    const {user} = useContext(Context);
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const [allError, setAllError] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const click = async () => {
        if (isLogin) {
            const responseData = await login(email, password);
            console.log(responseData)
            if (responseData.success) {
                //todo wath ulbi internet magazin from 2:08:10 to save token
                localStorage.setItem('token', responseData.token);
                user.setIsAuth(true)
                user.setUser(true)
                navigate(NOTES_ROUTE);
            } else {
                // alert(responseData.message)
                // navigate(LOGIN_ROUTE)
                setAllError(responseData.message)
                setShowErrors(true)
            }
        } else {
            const responseData = await registration(email, password);
            console.log(responseData)
            // alert(responseData.message)
            if (responseData.success) {
                navigate(LOGIN_ROUTE);
                setShowErrors(false)
            } else {
                setAllError(responseData.message)
                setShowErrors(true)
                // navigate(REGISTRATION_ROUTE)
            }
        }
    }

    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                    style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Log in' : 'Registration'}</h2>
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
                    { showErrors
                        ? <span className={"mt-2 text-danger"}>{allError}</span>
                        : null}
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
});

export default Auth;