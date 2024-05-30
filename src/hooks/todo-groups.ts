import useSWR from "swr";
import { TodoGroup } from "../utils/types";
import useSWRMutation from "swr/mutation";
import { createTodoGroup } from "../api";
import { alphabeticalOrder } from "../utils/sort";

export const useGetTodoGroups = () => {
  return useSWR<TodoGroup[]>("todo-group", {
    suspense: true,
  });
};

export const useCreateTodoGroup = () => {
  const { mutate } = useGetTodoGroups();

  return useSWRMutation("/todo-group", createTodoGroup, {
    onError: (error) => {
      console.error(error);
    },

    onSuccess: () => {
      mutate();
    },
  });
};
