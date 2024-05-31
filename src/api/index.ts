import axios from "axios";

const TodoApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const fetcher = (url: string) =>
  TodoApiInstance.get(url).then((res) => res.data);

export const createTodoGroup = async (
  url: string,
  { arg }: { arg: { title: string; description?: string } }
) => {
  await TodoApiInstance.post(url, {
    title: arg.title,
    description: arg.description,
  });
};

export const deleteTodoGroup = async (url: string) => {
  await TodoApiInstance.delete(url);
};
