import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import type { IUserTable } from "../../models/users.model";
import { CircleLoader } from "react-spinners";
import { UsersTable } from "./UsersTable";

export const Users = () => {
  const [users, setUsers] = useState<IUserTable[]>([]);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {

    if (isInitialPageLoad) {
        getUsers();
      setIsInitialPageLoad(false);
    }
  }, []);


  const getUsers = async () => {
console.log("get all users");

  };
return (
    <div className="relative isolate bg-[#f8fafc] min-h-[100vh]">
      <Navbar />
      <div className="mb-36 space-y-40 p-3">
        <div className="pt-28">
          <div className="grid grid-cols-2">
            <p
              className="text-left text-[#222222] font-extrabold"
            >
              Employees: ({users.length})
            </p>
            <div className="text-right pb-2">
              <button
                id="viewBtn"
                onClick={() => navigate("/user/create")}
                className="bg-[#222222] text-white font-bold py-2 px-4 rounded hover:bg-[#454545] transition-colors duration-300"
              >ADD USER</button>
            </div>
          </div>
          <hr className="h-px pt-1 bg-[#F5D426] border-0"></hr>
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