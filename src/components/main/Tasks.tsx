import { useContext, useEffect, useState } from 'react';
import MyTasksContext from '../../context/TasksContext/MyTasksContext';
import { MyTasks } from '../../context/TasksContext/types';
import InputSection from './InputSection';
import TodoItem from './TodoItem';

const Tasks : React.FC = () => {
  const { myTasks, setMyTasks, setInputTaskOn } = useContext(MyTasksContext);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem('myTasks')) {
      const jsonTasks : MyTasks[] = JSON.parse(localStorage.getItem('myTasks') || '');

      setMyTasks(jsonTasks);
    }
  }, []);

  function handleChange(taskId : number) {
    const newTasks = myTasks.map((task : MyTasks) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    setMyTasks(newTasks);
    localStorage.setItem('myTasks', JSON.stringify(newTasks));
  }

  function deleteTask(taskId : number) {
    const newTasks = myTasks.filter((task : MyTasks) => task.id !== taskId);

    setEditIndex(null);
    setMyTasks(newTasks);
    localStorage.setItem('myTasks', JSON.stringify(newTasks));
  }

  function edit(index : number) {
    setInputTaskOn((false));
    setEditIndex(index);
  }

  return (
    myTasks
      .length > 0
      ? (
        <div>
          {myTasks
            .filter((task : MyTasks) => task.isDone === false)
            .map((task, index) => (editIndex !== index
              ? (
                <TodoItem
                  key={ task.id }
                  task={ task }
                  onChange={ handleChange }
                  onDelete={ deleteTask }
                  edit={ edit }
                  index={ index }
                />
              )
              : (
                <InputSection
                  cancelClick={ () => setEditIndex(null) }
                  buttonName="Salvar"
                  title={ task.title }
                  description={ task.description }
                  id={ task.id }
                  key={ task.id }
                />
              )))}
        </div>
      )
      : (
        <div />
      )
  );
};

export default Tasks;
