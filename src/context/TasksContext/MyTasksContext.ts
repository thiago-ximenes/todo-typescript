import { createContext } from 'react';

export interface MyTasksContext {
  myTags: string[];
  setMyTags: (tags: string[]) => void;
}

export const myTasksContextDefaultValue: MyTasksContext = {
  myTags: [],
  setMyTags: () => {},
}

const MyTasksContext = createContext<MyTasksContext>(myTasksContextDefaultValue);

export default MyTasksContext;