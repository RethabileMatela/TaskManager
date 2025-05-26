import { createBrowserRouter } from "react-router-dom";
import { CreateUser } from "./pages/user/CreateUser";
import Error from "./pages/error/Error";
import Home from "./pages/Home";
import { UserEdit } from "./pages/user/UserEdit";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/user/create",
        element: <CreateUser />,
        errorElement: <Error />,
    },
    {
        path: "/users/edit/:id",
        element: <UserEdit />,
        errorElement: <Error />,
    },
]);

export default router;


