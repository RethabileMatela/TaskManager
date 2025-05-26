import { createBrowserRouter } from "react-router-dom";
import { CreateUser } from "./pages/user/CreateUser";
import Error from "./pages/error/Error";
import Home from "./pages/Home";

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
]);

export default router;