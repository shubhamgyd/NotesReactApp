import { useTask } from "../context/taskContext";
import { ShowTasks } from "./ShowTasks";
export const ArchiveTask = () => {
  const { taskList } = useTask();
  const archiveTasks = taskList.filter(
    ({ isArchived, isDeleted, isImportant }) =>
      isArchived === true && isDeleted === false
  );
  return (
    <div className="content flex flex-col gap-6 p-4">
      <div className="pinnedTasks flex flex-wrap gap-6">
        {archiveTasks.map(({ title, text, id }) => (
          <div key={id}>
            <ShowTasks title={title} text={text} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
