import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import type { IUserTable } from "../../models/users.model";
import { CircleLoader } from "react-spinners";
import { UsersTable } from "./UsersTable";

export const Users = () => {
  const [users, setUsers] = useState<IUserTable[]>([]);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);
  const [isLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitialPageLoad) {
      fetchUserData();
      setIsInitialPageLoad(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/users/');
      const data: IUserTable[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="relative isolate bg-[#f8fafc] min-h-[100vh]">
      <Navbar />
      <div className="mb-36 space-y-40 p-3">
        <div className="pt-28">
          <div className="grid grid-cols-2">
            <p
              className="text-left text-lg text-[#222222] font-extrabold"
            >
              USERS: ({users.length})
            </p>
            <div className="text-right pb-2">
              <button
                id="viewBtn"
                onClick={() => navigate("/user/create")}
                className="bg-[#222222] text-white font-bold py-2 px-4 rounded hover:bg-[#454545] transition-colors duration-300"
              >ADD USER</button>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center mt-10">
              <CircleLoader size={100} color="#224F34" />
            </div>
          ) : (
            <>
              <UsersTable users={users} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};