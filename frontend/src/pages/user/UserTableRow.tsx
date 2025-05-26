import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import type { IUserTable } from "../../models/users.model";
import type { JSX } from "react";

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
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4 grid grid-cols-3">
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
      </td>
    </tr>
  );
};