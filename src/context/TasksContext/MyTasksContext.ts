import { createContext, ReactNode } from 'react';
import { MyTasksContext } from './types';


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