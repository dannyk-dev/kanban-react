import { TodoGroup } from "./types";

export const alphabeticalOrder = (data: TodoGroup[] | undefined) => {
  if (!data) return data;

  return data.sort((a, b) => a.title.localeCompare(b.title));
};
