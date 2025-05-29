import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import type { IUserTable } from "../../models/users.model";
import type { JSX } from "react";
import { BsFillEyeFill } from "react-icons/bs";

type Props = {
  user: IUserTable;
};

export const UserTableRow = ({ user }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <tr className="bg-[#222222] border-b border-b-[#414141]">
      <td className="px-6 py-4"><img src="/av.avif" alt="Abhiraj" className="w-15 h-15 rounded-full" />  </td>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4 text-green-500 cursor-pointer">
        <BsFillEyeFill
          size={30}
          color="#00c951"
          className="hover:scale-150 cursor-pointer"
          onClick={() => navigate(`/users/${user.id}/tasks`)}
        />
      </td>
      <td className="px-6 py-4 text-green-500 cursor-pointer  "
      >
        <FaUserEdit
          size={30}
          color="#0D92F4"
          className="hover:scale-150 cursor-pointer"
          onClick={() => navigate(`/users/${user.id}/edit`)}
        />
      </td>
    </tr>
  );
};

