import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import type { IUserTable } from "../../models/users.model";
import { UserForm } from "./UserForm";
import Navbar from "../../components/Navbar";
import { getUserById, updateUserData } from "../../utils/dataUtils";

export const UserEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
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
        console.log("currentUser function called");

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

    const handleSubmit = async (user: IUserTable) => {
        setIsUpdating(true);
        setSuccessMessage("");
        setErrorMessage("");
        try {
            user.updatedAt = new Date().getTime();

            await updateUserData(
                "http://localhost:9000/api/users/",
                user.id,
                user.name,
                user.role
            );

            console.log("user: ", user);
            setSuccessMessage("User updated successfully.");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage(
                "User not updated. Please try again or contact support."
            );
            setIsUpdating(false);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Navbar />
            <div className="mb-36 space-y-40 p-3">
                <div className="pt-28">
                    <p
                        className="text-left text-[#224F34] font-extrabold p-2"
                    >
                        Edit User: {user?.name}
                    </p>
                    <hr className="h-px pt-1 bg-[#F5D426] border-0"></hr>
                    {isLoading ? (
                        <div className="flex justify-center mt-10">
                            <CircleLoader size={100} color="#224F34" />
                        </div>
                    ) : (
                        <>
                            <UserForm
                                isUpdating={isUpdating}
                                isSaving={false}
                                onSubmit={handleSubmit}
                                initialData={user}
                                isDeleting={false} />
                            <p
                                className="text-center error text-red-500 pt-1"
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
    );
};