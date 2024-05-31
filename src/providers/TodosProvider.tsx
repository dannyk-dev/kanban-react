import React, { PropsWithChildren, useContext, useState } from "react";
import { TodoGroup } from "../utils/types";
import { useGetTodoGroups } from "../hooks/todo-groups";
import { alphabeticalOrder } from "../utils/sort";

type TodosContextProps = {
  groups: TodoGroup[] | undefined;
};

const TodosContext = React.createContext<TodosContextProps>({
  groups: undefined,
});

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const { data: groupsData } = useGetTodoGroups();
  const [groups, setGroups] = useState<TodoGroup[] | undefined>(
    alphabeticalOrder(groupsData)
  );

  return (
    <TodosContext.Provider value={{ groups }}>{children}</TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  return useContext(TodosContext);
};
