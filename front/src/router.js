import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PaginaInicial from "./pages/PaginaInicial";
import Perfil from "./pages/Perfil";
import Lembrete from "./pages/Lembrete";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/lembretes",
        element: <PaginaInicial />
    },
    {
        path: "/perfil",
        element: <Perfil />
    },
    {
        path: "/adicionar",
        element: <Lembrete />
    }
])

export default routes