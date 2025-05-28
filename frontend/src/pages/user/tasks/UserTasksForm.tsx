import { CircleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import type { IUserTasks } from "../../../models/users.model";

interface Props {
    onSubmit: (task: IUserTasks) => void; // When form is submitted
    initialData?: IUserTasks; // If there is data, form is now in update mode not create
    isSaving: boolean; // Is saving in progress?
    isUpdating: boolean; // Is updating in progress?
    isDeleting: boolean; // Is deleting in progress?
}

export const UserTasksForm: React.FC<Props> = ({
    onSubmit,
    initialData,
    isSaving,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserTasks>({
        defaultValues: initialData || {
            id: "",
            title: "",
            description: "",
        },
    });

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-gray-900">     
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 border  p-4 rounded shadow"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* TITLE */}
                <div className="mb-3">
                    <label
                        className="block text-gray-900 text-sm font-bold mb-2"
                        htmlFor="name"
                        data-testid={"name"}
                    >
                        Title:
                    </label>
                    <input
                        className="w-full h-12 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none border-[#222222] focus:border-green-500 focus:border-2"
                        placeholder="Title"
                        {...register("title", { required: "Ttle is required" })}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm pt-1">{errors.title.message}</p>
                    )}
                </div>
                {/* DESCRIPTION */}
                <div className="mb-3">
                    <label
                        className="block text-gray-900 text-sm font-bold mb-2"
                        htmlFor="description"
                        data-testid={"description"}
                    >
                        Description:
                    </label>
                    <input
                        className="w-full h-12 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none border-[#222222] focus:border-green-500 focus:border-2"
                        placeholder="Description"
                        {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm pt-1">{errors.description.message}</p>
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
                            ""
                        ) : (
                            "Add Task"
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