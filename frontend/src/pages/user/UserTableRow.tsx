import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import type { IUserTable } from "../../models/users.model";
import type { JSX } from "react";
import { TiUserDelete } from "react-icons/ti";

type Props = {
    user: IUserTable;
    closeDetailModal: (close: boolean) => void;
    closeDeleteModal: (close: boolean) => void;
    openDetailModal: (user: IUserTable) => void;
    openDeleteModal: (user: IUserTable) => void;
};

export const UserTableRow = ({ user, openDetailModal, openDeleteModal }: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <tr className="bg-white border-b border-gray-200">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {user.id}
            </th>
            <td className="px-6 py-4">
                <img src="/jane.jpg" alt="Abhiraj" className="w-15 h-15 rounded-full" />
            </td>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.role}</td>
            <td className="px-6 py-4 text-green-500">View Tasks (6) </td>
            <td className="px-6 py-4 flex items-center space-x-4 gap-3">
                <FaUserEdit size={30} color="#0D92F4" />
                <TiUserDelete size={30} color="red" />
            </td>
            {/* <td className="px-6 py-4 grid grid-cols-3">
        <FaEye
          id="view"
          size={32}
          color="#808080"
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          onClick={() => openDetailModal(user)}
        />
        <RiEdit2Fill
          size={32}
          color="#808080"
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          onClick={() => navigate("")}
        />
        <RiDeleteBin5Fill
          id="delete"
          size={32}
          color="red"
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          onClick={() => openDeleteModal(user)}
        />
      </td> */}
        </tr>
    );
};

{/* <td className="px-6 py-4">{user.name}</td>
<td className="px-6 py-4">{user.role}</td> */}