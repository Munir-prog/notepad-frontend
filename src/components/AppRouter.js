import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
        <div>
            <Routes>
                {user.isAuth
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
});

export default AppRouter;