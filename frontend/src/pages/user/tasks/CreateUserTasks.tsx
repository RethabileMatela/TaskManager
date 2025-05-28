import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import type { IUserTable, IUserTasks } from "../../../models/users.model";
import Navbar from "../../../components/Navbar";
import { UserTasksForm } from "./UserTasksForm";
import { createTaskData, getUserById } from "../../../utils/dataUtils";
import { useParams } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

export const CreateUserTasks: React.FC = () => {
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);
    const [user, setUser] = useState<IUserTable>();

    useEffect(() => {
        if (isInitialPageLoad) {
            getCurrentUser();
            setIsInitialPageLoad(false);
        }
    }, []);

    /**
        * Gets user by ID from url path
        */
    const getCurrentUser = async () => {
        console.log("currentUser function called IN CREATE TASKS");

        setIsLoading(true);
        try {
            if (id && id.length > 0) {
                const currentUser: IUserTable =
                    await getUserById(
                        "http://localhost:9000/api/users/",
                        id
                    );
                if (!currentUser) {
                    setErrorMessage("User not found.");
                    setIsLoading(false);
                    return;
                }

                setUser(currentUser);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (task: IUserTasks) => {
        try {
            setIsSaving(true);
            await createTaskData(
                "http://localhost:9000/api/users/",
                id!,
                task.title,
                task.description
            );
            setIsSaving(false);
            setSuccessMessage("Task created successfully!");
        } catch (error) {
            setIsSaving(false);
            setErrorMessage("Error creating task.");
    };
    }
    return (

        <div className="w-full h-screen flex flex-col items-center justify-center  text-gray-200 ">
            <Navbar />
            <div className="w-full mt-28">
                <div className="mb-36 space-y-40 p-3">
                    <div className="pt-28">
                        <p
                            className="text-left text-[#222222] font-extrabold p-2"
                        >
                            New Task
                        </p>
                        {/* <hr className="h-px pt-1 bg-[#0db519] border-0"></hr> */}
                        {isSaving ? (
                            <div className="flex justify-center mt-10">
                                <CircleLoader size={100} color="#224F34" />
                            </div>
                        ) : (
                            <>
                                <UserTasksForm
                                    isUpdating={false}
                                    isSaving={isSaving}
                                    onSubmit={handleSubmit}
                                    isDeleting={false} />
                                <p
                                    className=" text-center error text-red-500 pt-1"
                                >
                                    {errorMessage}
                                </p>
                                <p
                                    className=" text-center error text-green-500 pt-1 pb-5"
                                >
                                    {successMessage}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};