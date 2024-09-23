import { useTask } from "../context/taskContext";
import { ShowTasks } from "./ShowTasks";
export const DeletedTask = () => {
  const { taskList } = useTask();
  const deletedTasks = taskList.filter(({ isDeleted }) => isDeleted === true);
  return (
    <div className="content flex flex-col gap-6 p-4">
      <div className="pinnedTasks flex flex-wrap gap-6">
        {deletedTasks.map(({ title, text, id }) => (
          <div key={id}>
            <ShowTasks title={title} text={text} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
