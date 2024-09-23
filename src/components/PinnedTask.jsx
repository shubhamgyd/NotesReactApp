import { useTask } from "../context/taskContext";
import { ShowTasks } from "./ShowTasks";

export const PinnedTask = () => {
  const { taskList } = useTask();

  const pinnedTasks = taskList.filter(({ isPinned }) => isPinned === true);
  const otherTasks = taskList.filter(({ isPinned }) => isPinned !== true);

  return taskList?.length > 0 ? (
    <div>
      {pinnedTasks && pinnedTasks?.length > 0 && (
        <div>
          <div className="text-lg font-semibold">Pinned Tasks</div>
          <div className="flex flex-wrap gap-6">
            {pinnedTasks.map(({ title, text, id, isPinned }) => (
              <div key={id}>
                <ShowTasks
                  title={title}
                  text={text}
                  id={id}
                  isPinned={isPinned}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {otherTasks && otherTasks?.length > 0 && (
        <div>
          {pinnedTasks?.length > 0 && (
            <div className="mt-9 text-lg font-semibold">Other Tasks</div>
          )}
          <div className="flex flex-wrap gap-6">
            {otherTasks.map(({ title, text, id }) => (
              <div key={id}>
                <ShowTasks title={title} text={text} id={id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    ""
  );
};
