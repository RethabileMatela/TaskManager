import { createBrowserRouter } from "react-router-dom";
import { CreateUser } from "./pages/user/CreateUser";
import Error from "./pages/error/Error";
import Home from "./pages/Home";
import { UserEdit } from "./pages/user/UserEdit";
import UserTasks from "./pages/user/tasks/UserTasks";

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
        path: "/users/:id/edit",
        element: <UserEdit />,
        errorElement: <Error />,
    },
    {
        path: "/users/:id/tasks",
        element: <UserTasks />,
        errorElement: <Error />,
    },
]);

export default router;


