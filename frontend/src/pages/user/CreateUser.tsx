import React, { useState } from "react";
import { CircleLoader } from "react-spinners";
import type { IUserTable } from "../../models/users.model";
import { UserForm } from "./UserForm";
import Navbar from "../../components/Navbar";
import { createUserData } from "../../utils/dataUtils";

export const CreateUser: React.FC = () => {
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const handleSubmit = async (user: IUserTable) => {
        setIsSaving(true);
        setSuccessMessage("");
        setErrorMessage("");
        try {
            await createUserData(
                'http://localhost:9000/api/users/', user.name, user.role
            );
            setSuccessMessage("User added successfully!");
            setTimeout(() => {
                window.location.href = "/"; // Navigate to home
            }, 1000);
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage(
                "User not added. Please try again or contact support."
            );
            setIsSaving(false);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center  text-gray-200 ">
            <Navbar />
            <div className="w-full mt-28">
                <div className="mb-36 space-y-40 p-3">
                    <div className="pt-28">
                        <p
                            className="text-left text-[#222222] font-extrabold p-2"
                        >
                            New User
                        </p>
                        {isSaving ? (
                            <div className="flex justify-center mt-10">
                                <CircleLoader size={100} color="#224F34" />
                            </div>
                        ) : (
                            <>
                                <UserForm
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