import useSWR from "swr";
import { Todo } from "../utils/types";

export const useGetTodos = () => {
  return useSWR<Todo[]>("todos", {
    suspense: true,
  });
};
