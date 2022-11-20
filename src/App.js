import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";
import "./style/App.css"


const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then((data) => {
            if (data) {
                user.setUser(true)
                user.setIsAuth(true)
            }
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <div className={"d-flex justify-content-center h-100"}>
                <div className={"w-75 bg-secondary h-100"}>
                    <NavBar/>
                    <AppRouter/>
                </div>
            </div>
        </BrowserRouter>
    );
});

export default App;
