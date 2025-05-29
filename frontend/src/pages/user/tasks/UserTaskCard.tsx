import type { JSX } from "react";
import type { IUserTasks } from "../../../models/users.model";

type Props = {
    task: IUserTasks;
};

export const UserTaskCard = ({ task }: Props): JSX.Element => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
            <div className="bg-gray-200 px-5 py-2 grid items-end justify-center h-14 font-bold uppercase">
            {task.title.toUpperCase()}
            </div>
            <div className="p-6">
                <p className="text-gray-600">{task.description}</p>
            </div>
        </div>
    );
};
