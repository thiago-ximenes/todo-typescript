import { ReactNode } from 'react';

export interface MyTags {
  title: string;
  icon: ReactNode;
}

export interface MyTasks {
  title: string;
  description: string;
  tags: MyTags[];
  id: number;
  isDone: boolean;
}

export interface MyTasksContext {
  myTags: MyTags[];
  setMyTags: (tags: MyTags[]) => void;
  myTasks: MyTasks[];
  setMyTasks: (tasks: MyTasks[]) => void;
  inputTaskOn: boolean;
  setInputTaskOn: (inputTaskOn: boolean) => void;
}