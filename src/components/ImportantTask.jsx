import { useTask } from "../context/taskContext";
import { ShowTasks } from "./ShowTasks";
export const ImportantTask = () => {
  const { taskList } = useTask();
  const importantTasks = taskList.filter(
    ({ isImportant, isDeleted }) => isImportant === true && isDeleted === false
  );
  return (
    <div className="content flex flex-col gap-6 p-4">
      <div className="pinnedTasks flex flex-wrap gap-6">
        {importantTasks.map(({ title, text, id, isPinned, isImportant }) => (
          <div key={id}>
            <ShowTasks
              title={title}
              text={text}
              id={id}
              isPinned={isPinned}
              isImportant={isImportant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
