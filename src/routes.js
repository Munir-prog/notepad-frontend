import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, NOT_FOUND, NOTE_ROUTE, NOTES_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: NOTES_ROUTE,
        component: <Notes/>
    },
    {
        path: NOTE_ROUTE + '/:id',
        component: <Note/>
    },
    {
        path: NOT_FOUND,
        component: <NOT_FOUND/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth/>
    },
    {
        path: NOT_FOUND,
        component: <Auth/>
    }
]