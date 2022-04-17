import React, { useState } from 'react';
import { BsFillCalendar2EventFill, BsFillInboxFill } from 'react-icons/bs';
import MyTasksContext from './MyTasksContext';
import { MyTags, MyTasks } from './types';

const MyTasksProvider: React.FC = ({ children }) => {
  const [myIcons] = useState<object>({
    Hoje: <BsFillCalendar2EventFill />,
    'Caixa de Entrada': <BsFillInboxFill />,
  });

  const [myTags, setMyTags] = useState<MyTags[]>([
    {
      title: 'Hoje',
    },
    {
      title: 'Caixa de Entrada',
    },

  ]);

  const [myTasks, setMyTasks] = useState<MyTasks[]>([]);

  const [inputTaskOn, setInputTaskOn] = useState<boolean>(false);

  const [myLanguage, setMyLanguage] = useState<string>('pt-BR');

  const globalStates = {
    myTags,
    setMyTags,
    myTasks,
    setMyTasks,
    inputTaskOn,
    setInputTaskOn,
    myIcons,
    myLanguage,
    setMyLanguage,
  };

  return (
    <MyTasksContext.Provider
      value={ globalStates }
    >
      { children }
    </MyTasksContext.Provider>
  );
};

export default MyTasksProvider;
