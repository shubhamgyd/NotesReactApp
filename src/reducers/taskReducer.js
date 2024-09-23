import { v4 as uuid } from "uuid";
export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            title: state.title,
            text: state.text,
            id: uuid(),
          },
        ],
      };
    case "CLEAR":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "DELETE":
      return {
        ...state,
        taskList: payload,
      };
    default:
      return state;
  }
};
