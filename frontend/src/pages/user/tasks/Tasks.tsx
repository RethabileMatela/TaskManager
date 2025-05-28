import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import type { IUserTasks } from "../../../models/users.model";
import Navbar from "../../../components/Navbar";
import UserTasks from "./UserTasks";

 export const Tasks = () => {
  const [tasks, setTasks] = useState<IUserTasks[]>([]);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);
  const [isLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {

    if (isInitialPageLoad) {
      getAllTasksByUserId();
      setIsInitialPageLoad(false);
    }
  }, []);

  useEffect(() => {
    getAllTasksByUserId();
  }, []);

  const getAllTasksByUserId = async () => {
    try {
      if (!id) {
        console.error("User ID is missing");
        return;
      }
      const response = await fetch(`http://localhost:9000/api/users/${id}/tasks`);
      const data: IUserTasks[] = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };

  return (
    <div className="relative isolate bg-[#f8fafc] min-h-[100vh] ">
      <Navbar />
      <div className="mb-36 space-y-40 p-3 px-20">
        <div className="pt-28">
          <div className="grid grid-cols-2">
            <p
              className="text-left text-lg text-[#222222] font-extrabold"
            >
              Tasks: ({tasks.length})
            </p>
            <div className="text-right pb-2">
                <button
                id="viewBtn"
                onClick={() => navigate(`/task/${id}/create`)}
                className="bg-[#222222] text-white font-bold py-2 px-4 rounded hover:bg-[#454545] transition-colors duration-300"
                >
                ADD TASK
                </button>
            </div>
          </div>
          {/* <hr className="h-px pt-1 bg-[#0BC518] border-0"></hr> */}
          {isLoading ? (
            <div className="flex justify-center mt-10">
              <CircleLoader size={100} color="#224F34" />
            </div>
          ) : (
            <>
              <UserTasks tasks={tasks} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};