import { createBrowserRouter } from "react-router-dom";
import { CreateUser } from "./pages/user/CreateUser";
import Error from "./pages/error/Error";
import Home from "./pages/Home";
import { UserEdit } from "./pages/user/UserEdit";
import { Tasks } from "./pages/user/tasks/Tasks";
import { CreateUserTasks } from "./pages/user/tasks/CreateUserTasks";

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
        path: "/task/:id/create",
        element: <CreateUserTasks />,
        errorElement: <Error />,
    },
    {
        path: "/users/:id/edit",
        element: <UserEdit />,
        errorElement: <Error />,
    },
    {
        path: "/users/:id/tasks",
        element: <Tasks/>,
        errorElement: <Error />,
    },
]);

export default router;


