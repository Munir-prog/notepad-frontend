import React from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    // const {isAuth} = useContext(AuthContext);
    const isAuth = true;

    return (
        <div>
            <Routes>
                {isAuth
                    ?
                    authRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            key={route.path}
                        />
                    )
                    : ''
                }
                {
                    publicRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            key={route.path}
                        />
                    )
                }
            </Routes>

        </div>
    );
};

export default AppRouter;