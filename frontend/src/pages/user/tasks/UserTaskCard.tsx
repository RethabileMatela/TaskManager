import type { JSX } from "react";
import type { IUserTasks } from "../../../models/users.model";
// import { RiDeleteBin6Fill } from "react-icons/ri";

type Props = {
    task: IUserTasks;
};

export const UserTaskCard = ({ task }: Props): JSX.Element => {

    return (

        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
            <div className="bg-gray-200 px-5 py-2   grid items-end justify-center h-14">
            </div>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
            </div>
            {/* <div className="px-6 py-4 flex items-center space-x-4 gap-3">
                        <RiDeleteBin6Fill
                            size={30}
                            color="red"
                            className="hover:scale-150 cursor-pointer"
               /></div> */}
        </div>
    );
};
