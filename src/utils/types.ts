export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
}

export interface TodoGroup {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  todos: Todo[];
}
