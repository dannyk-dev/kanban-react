export interface Todo {
  todo: string;
  completed: boolean;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
}

export interface TodoGroup {
  title: string;
  description: string;
  createdAt: Date;
  todos: Todo[];
}
