import { useParams } from "react-router-dom";
import type { IUserTasks } from "../../../models/users.model";
import { UserTaskCard } from "./UserTaskCard";
import { useEffect } from "react";



interface Props {
  tasks: IUserTasks[];
}

const UserTasks = ({ tasks }: Props) => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    console.log("current id",id);
  }, [id]);

  return (
    <div>
      <div className="mb-4">
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-x-auto rounded-lg shadow">
        {tasks.map((task: IUserTasks) => (
          <UserTaskCard
        key={task.id}
        task={task}
          />
        ))}
      </div>
    </div>
  );
};
export default UserTasks;