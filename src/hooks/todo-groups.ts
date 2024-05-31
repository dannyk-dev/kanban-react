import useSWR from "swr";
import { TodoGroup } from "../utils/types";
import useSWRMutation from "swr/mutation";
import { createTodoGroup, deleteTodoGroup } from "../api";

export const useGetTodoGroups = () => {
  return useSWR<TodoGroup[]>("todo-group", {
    suspense: true,
  });
};

export const useCreateTodoGroup = () => {
  const { mutate } = useGetTodoGroups();

  return useSWRMutation("todo-group", createTodoGroup, {
    onError: (error) => {
      console.error(error);
    },

    onSuccess: () => {
      mutate();
    },
  });
};

export const useDeleteTodoGroup = (todoGroupId: string) => {
  const { mutate } = useGetTodoGroups();

  return useSWRMutation(`todo-group/${todoGroupId}`, deleteTodoGroup, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      mutate();
    },
  });
};
