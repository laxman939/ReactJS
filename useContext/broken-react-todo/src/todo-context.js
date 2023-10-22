/* eslint-disable quotes */
import { createContext } from "react";

export const TodosContext = createContext({});

// cutsom hook
// export function useTodosContext() {
//   const todos = useContext(TodosContext);

//   if (todos === undefined) {
//     throw new Error("useTodosContext must be used with a TodosContext");
//   }
//   return todos;
// }
