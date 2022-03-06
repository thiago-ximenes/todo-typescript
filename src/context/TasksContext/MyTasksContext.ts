import { createContext } from 'react';
import { MyTasksContext } from './types';

export const myTasksContextDefaultValue: MyTasksContext = {
  myTags: [],
  setMyTags: () => {},
  myTasks: [],
  setMyTasks: () => {},
  inputTaskOn: false,
  setInputTaskOn: () => {},
  myIcons: {},
};

const MyTasksContext = createContext<MyTasksContext>(
  myTasksContextDefaultValue,
);

export default MyTasksContext;
