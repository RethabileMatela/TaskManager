import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import type { IImage, IUserTable } from "../../models/users.model";

interface Props {
    onSubmit: (user: IUserTable) => void; // When form is submitted
    initialData?: IUserTable; // If there is data, form is now in update mode not create
    isSaving: boolean; // Is saving in progress?
    isUpdating: boolean; // Is updating in progress?
    isDeleting: boolean; // Is deleting in progress?
}

export const UserForm: React.FC<Props> = ({
    onSubmit,
    initialData,
    isSaving,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IUserTable>({
        defaultValues: initialData || {
            id: "",
            images: [],
            name: "",
            role: "",
        },
    });
    const [images, setImages] = useState<IImage[]>([]);

    // Clean up previews on unmount
    useEffect(() => {
        return () => {
            images.forEach((img) => URL.revokeObjectURL(img.url));
        };
    }, [images]);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);

        // Revoke previous previews to avoid memory leaks
        images.forEach((img) => URL.revokeObjectURL(img.url));

        const newImages: IImage[] = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));

        setImages(newImages); // Replace old images
        // ✅ Manually update 'images' in form state
        setValue("images", newImages, { shouldValidate: true });
    };

    const removeImage = (index: number) => {
        const updated = [...images];
        const removed = updated.splice(index, 1);
        URL.revokeObjectURL(removed[0].url); // Clean up
        setImages(updated);
    };


    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-gray-900">
            
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 border border-1 p-4 rounded shadow"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* NAME */}
                <div className="mb-3">
                    <label
                        className="block text-gray-900 text-sm font-bold mb-2"
                        htmlFor="name"
                        data-testid={"name"}
                    >
                        Name:
                    </label>
                    <input
                        className="w-full h-12 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none border-[#222222] focus:border-green-500 focus:border-2"
                        placeholder="User Name"
                        {...register("name", { required: "User name is required" })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm pt-1">{errors.name.message}</p>
                    )}
                </div>
                {/* ROLE */}
                <div className="mb-3">
                    <label
                        className="block text-gray-900 text-sm font-bold mb-2"
                        htmlFor="role"
                        data-testid={"role"}
                    >
                        Role:
                    </label>
                    <input
                        className="w-full h-12 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none border-[#222222] focus:border-green-500 focus:border-2"
                        placeholder="User Role"
                        {...register("role", { required: "User role is required" })}
                    />
                    {errors.role && (
                        <p className="text-red-500 text-sm pt-1">{errors.role.message}</p>
                    )}
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <button
                    className="bg-[#055b05] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"

                    data-testid="submitBtn"
                    children={
                        isSaving ? (
                            <CircleLoader size={30} color="white" />
                        ) : initialData ? (
                            "Update User"
                        ) : (
                            "Add User"
                        )
                    }
                ></button>
                <button
                    className="bg-[#222222] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                        // Navigate to home
                        window.location.href = "/";
                    }}
                    data-testid="cancelBtn"
                    children="Cancel"
                ></button>
            </div>
        </form>
        </div>
    );
};