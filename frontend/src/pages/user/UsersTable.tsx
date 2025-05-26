import { useState, type SetStateAction } from "react";
import type { IUserTable } from "../../models/users.model";
import { UserTableRow } from "./UserTableRow";


interface Props {
    users: IUserTable[];
}

export const UsersTable = ({ users }: Props) => {
    const [selectedUser, setSelectedUser] = useState<IUserTable | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [searchTerm, setSearchTerm] = useState("");
    const filteredUsers = users
        .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(indexOfFirstItem, indexOfLastItem);
        
 
    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    const openDeleteModal = (user: IUserTable) => {
        setSelectedUser(user);
        toggleDeleteModal();
    };
    const closeDeleteModal = () => {
        setSelectedUser(null);
    };

    const toggleDeleteModal = () => {
        const modal = document.getElementById("userDeleteModal");
        if (modal) {
            modal.classList.toggle("hidden");
        }
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users by name..."
                    className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="w-full text-sm text-left text-gray-200">
                    <thead className="text-xs uppercase">
                        <tr className="bg-[#222222] border-b border-b-green-500">
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
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
                        {filteredUsers.map((user: IUserTable) => (
                            <UserTableRow
                                closeDeleteModal={closeDeleteModal}
                                openDeleteModal={openDeleteModal}
                                key={user.id}
                                user={user}
                            />
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
          {Array.from(
            { length: Math.ceil(users.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                className={`bg-[#222222] text-white font-bold py-2 px-4 rounded hover:bg-[#454545] transition-colors duration-300 m-1 ${
                  currentPage === index + 1 ? "bg-green-500" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
            </div>
        </div>
    );
};