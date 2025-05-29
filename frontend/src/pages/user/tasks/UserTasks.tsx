import type { IUserTasks } from "../../../models/users.model";
import { UserTaskCard } from "./UserTaskCard";

interface Props {
  tasks: IUserTasks[];
}

const UserTasks = ({ tasks }: Props) => {
  return (
    <div>
      <div className="mb-4">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 overflow-x-auto rounded-lg shadow p-4 bg-[#1B3C28]">
        {tasks.map((task: IUserTasks, index) => (
          <UserTaskCard
        key={`${task.id}-${index}`}
        task={task}
          />
        ))}
      </div>
    </div>
  );
};
export default UserTasks;