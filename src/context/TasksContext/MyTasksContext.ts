import { createContext } from 'react';

export interface MyTasksContext {
  myTags: string[];
  setMyTags: (tags: string[]) => void;
  myTasks: string[];
  setMyTasks: (tasks: string[]) => void;
  inputTaskOn: boolean;
  setInputTaskOn: (inputTaskOn: boolean) => void;
}

export const myTasksContextDefaultValue: MyTasksContext = {
  myTags: [],
  setMyTags: () => {},
  myTasks: [],
  setMyTasks: () => {},
  inputTaskOn: false,
  setInputTaskOn: () => {},
}

const MyTasksContext = createContext<MyTasksContext>(myTasksContextDefaultValue);

export default MyTasksContext;