export interface Task{
  id: number;
  title: number;
}

export interface Column{
  id: number;
  title: string;
  tasks: Task[];
}