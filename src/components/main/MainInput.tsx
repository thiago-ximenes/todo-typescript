import React, { useContext } from 'react';
import MyTasksContext from '../../context/TasksContext/MyTasksContext';
import InputButton from './InputButton';
import InputSection from './InputSection';

const MainInput = () => {
  const { inputTaskOn, setInputTaskOn } = useContext(MyTasksContext);

  function handleAddTaskClick(e : React.
    MouseEvent<HTMLButtonElement, MouseEvent> | null) : void {
    if (e !== null) e.preventDefault();
    setInputTaskOn(!inputTaskOn);
  }

  return (
    !inputTaskOn
      ? (
        <InputButton
          onClick={ handleAddTaskClick }
        />
      )
      : (
        <InputSection
          buttonName="input.add.button.name"
          cancelClick={ handleAddTaskClick }
          description={ null }
          id={ null }
          title={ null }
        />
      )
  );
};

export default MainInput;
