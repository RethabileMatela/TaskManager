import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import type { IUserTable } from "../../models/users.model";
import { useEffect, useState, type JSX } from "react";
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
    const [userData, setUserData] = useState<IUserTable[]>([]);



    return (

        <tr className="bg-[#222222] border-b border-b-[#414141]">
     
            <td className="px-6 py-4"><img src="/jane.jpg" alt="Abhiraj" className="w-15 h-15 rounded-full" />  </td>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.role}</td>
            <td 
              className="px-6 py-4 text-green-500 cursor-pointer hover:scale-105" 
              onClick={() => navigate("/user/tasks", { state: { userId: user.id } })}
            >
              View Tasks (6)
            </td>
            <td className="px-6 py-4 flex items-center space-x-4 gap-3"> <FaUserEdit size={30} color="#0D92F4" /><TiUserDelete size={30} color="red" /></td>
        </tr>
    );
};

