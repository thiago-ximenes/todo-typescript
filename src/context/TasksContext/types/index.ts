export interface MyTags {
  title: string;
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
  myIcons: object;
  myLanguage: string;
  setMyLanguage: (language: string) => void;
}
