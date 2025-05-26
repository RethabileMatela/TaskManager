import { useState } from "react";
import type { IUserTable } from "../../models/users.model";
import { UserTableRow } from "./UserTableRow";


interface Props {
    users: IUserTable[];
}

export const UsersTable = ({ users }: Props) => {
    const [selectedUser, setSelectedUser] = useState<IUserTable | null>(null);

    const openDetailModal = (user: IUserTable) => {
        setSelectedUser(user);
        toggleDetailModal();
    };

    const openDeleteModal = (user: IUserTable) => {
        setSelectedUser(user);
        toggleDeleteModal();
    };

    const closeDetailModal = () => {
        setSelectedUser(null);
    };


    const closeDeleteModal = () => {
        setSelectedUser(null);
    };
    const toggleDetailModal = () => {
        const modal = document.getElementById("userDetailModal");
        if (modal) {
            modal.classList.toggle("hidden");
        }
    };

    const toggleDeleteModal = () => {
        const modal = document.getElementById("userDeleteModal");
        if (modal) {
            modal.classList.toggle("hidden");
        }
    };

    return (
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="w-full text-sm text-left  text-gray-200">
                        <thead className="text-xs uppercase ">
                            <tr className="bg-[#222222] border-b border-b-green-500">
                                <th scope="col" className="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    tasks
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <UserTableRow closeDetailModal={closeDetailModal} closeDeleteModal={closeDeleteModal} openDetailModal={openDetailModal} openDeleteModal={openDeleteModal} key={user.id} user={user} />
                            ))}
                        </tbody>
                    </table>
                    {/* PAGENATION */}
                    <div className="flex items-center justify-between p-4 bg-[222222]">
                        <button className="px-3 py-1  bg-gray-900 rounded">Previous</button>
                        <span className="text-sm  text-gray-900">Page 1 of 10</span>
                        <button className="px-3 py-1  bg-gray-900 rounded">Next</button>
                    </div>
                    {/* <UserDeleteModal user={selectedUser} showDeleteBtn={true} isLoading={false} /> */}
                </div>
    );
};